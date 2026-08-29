#!/usr/bin/env bash
set -euo pipefail

DEST="public/images/stock"
mkdir -p "$DEST"
FAILS="$DEST/failed-downloads.txt"
: > "$FAILS"

items=(
"restaurant-01-warm-dining-table.jpg|35833832"
"restaurant-02-romantic-warm-dining.jpg|36353801"
"restaurant-03-modern-people-dining.jpg|7955383"
"restaurant-04-elegant-golden-interior.jpg|14590691"
"restaurant-05-cozy-modern-interior.jpg|15297133"
"restaurant-06-warm-modern-decor.jpg|36358765"
"restaurant-07-elegant-ambient-interior.jpg|19039292"
"restaurant-08-private-dining-interior.jpg|29707937"
"restaurant-09-warm-hanging-lights.jpg|776538"
"restaurant-10-modern-greenery-dining.jpg|34312942"
"restaurant-11-london-red-lit-interior.jpg|18756798"
"restaurant-12-table-setting-menu.jpg|32188258"
"bar-13-citrus-cocktail-mixing.jpg|31285168"
"bar-14-bartender-vibrant-bar.jpg|6174003"
"bar-15-bartender-serving-customer.jpg|6174019"
"bar-16-bartender-guests-counter.jpg|37594394"
"bar-17-bartender-holding-cocktail.jpg|4485375"
"bar-18-bartender-mixing-glass.jpg|6284889"
"bar-19-stylish-bartender-event.jpg|19674060"
"bar-20-cocktails-and-appetizers.jpg|30641906"
"bar-21-cocktail-bar-greenery.jpg|15325595"
"bar-22-garnishing-upscale-cocktail.jpg|16807988"
"bar-23-barman-pouring-cocktails.jpg|19674062"
"chef-24-team-plating-kitchen.jpg|15671416"
"chef-25-gourmet-plating-warm-light.jpg|36630804"
"chef-26-plating-modern-kitchen.jpg|36430087"
"chef-27-preparing-dish-kitchen.jpg|36430076"
"chef-28-precise-plating.jpg|32069867"
"chef-29-presenting-dish.jpg|36430028"
"chef-30-man-plating-food.jpg|3933217"
"chef-31-artful-plating.jpg|36430075"
"chef-32-gourmet-dish-plating.jpg|36430089"
"chef-33-friendly-chef-preparing.jpg|39025943"
"chef-34-expert-gourmet-plating.jpg|36430090"
"chef-35-busy-kitchen-pass.jpg|32640120"
)

ok=0
for item in "${items[@]}"; do
  filename="${item%%|*}"
  id="${item#*|}"
  out="$DEST/$filename"
  url="https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=1800"
  echo "Downloading $filename"
  if curl -A "Mozilla/5.0" -L --fail --retry 4 --retry-delay 2 --connect-timeout 20 --max-time 120 "$url" -o "$out"; then
    mime="$(file --brief --mime-type "$out" || true)"
    size="$(stat -c%s "$out" || echo 0)"
    if [[ "$mime" == image/* && "$size" -gt 10000 ]]; then
      echo "  OK: $mime, $size bytes"
      ok=$((ok+1))
    else
      echo "  INVALID: $mime, $size bytes"
      rm -f "$out"
      echo "$filename|$id|invalid:$mime:$size" >> "$FAILS"
    fi
  else
    echo "  FAILED"
    rm -f "$out"
    echo "$filename|$id|download_failed" >> "$FAILS"
  fi
done

echo "Downloaded $ok of ${#items[@]} images."
if [[ ! -s "$FAILS" ]]; then
  rm -f "$FAILS"
fi

if [[ "$ok" -lt 30 ]]; then
  echo "Too many downloads failed, refusing to commit an incomplete library."
  exit 1
fi
