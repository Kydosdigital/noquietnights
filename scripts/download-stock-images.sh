#!/usr/bin/env bash
set -euo pipefail

DEST="public/images/stock"
mkdir -p "$DEST"
FAILS="$DEST/failed-downloads.txt"
: > "$FAILS"

items=(
"restaurant-01-busy-candlelit-dining.jpg|TlScs8TkNG4"
"restaurant-02-elegant-warm-interior.jpg|Ph7Y42lXzyw"
"restaurant-03-warm-tables-chairs.jpg|Pgu0wF6EOOE"
"restaurant-04-private-dining-guests.jpg|-DHh8TBJ8YI"
"restaurant-05-intimate-table-lamp.jpg|mLPNw6L5t5o"
"restaurant-06-alley-warm-lighting.jpg|nsKPOIqaGbQ"
"restaurant-07-friends-candlelit-dinner.jpg|UEjjO-aJtZ8"
"restaurant-08-entrance-at-night.jpg|QVFBrb1kqC0"
"restaurant-09-modern-interior.jpg|j0dAs1yodko"
"chef-10-plating-professional-kitchen.jpg|bXOHW6fKdPI"
"chef-11-plating-moody-kitchen.jpg|bhoHDqroF14"
"chef-12-team-working-kitchen.jpg|sQg28nQnCTA"
"chef-13-garnishing-gourmet-dish.jpg|W2tx3M56gJw"
"chef-14-presenting-plated-dish.jpg|QuFOw-TjqGU"
"chef-15-preparing-food.jpg|NDvpHUAHkqg"
"chef-16-kitchen-team-at-work.jpg|Y_tMFA6KCcI"
"bar-17-bartender-preparing-cocktail.jpg|ZSndlbC6ivY"
"bar-18-bartender-drink-with-ice.jpg|hG0tpL0vR0M"
"bar-19-bartender-pouring-mint-cocktail.jpg|dfae7jtxCM8"
"bar-20-bartender-behind-counter.jpg|Dl9S7ok1cpU"
"bar-21-woman-bartender-making-drink.jpg|g-fXnd_sUPU"
"guests-22-cocktails-and-snacks.jpg|hJqfore3SH4"
"guests-23-toasting-cocktails.jpg|JHezbrzFErw"
"pub-24-friends-with-drinks.jpg|jnn09Qi2-oM"
"pub-25-dimly-lit-table.jpg|0GRA5JfKdrU"
"guests-26-party-friends-drinks.jpg|UMbzEJ3FgMg"
"pub-27-row-of-beer-taps.jpg|rfOFRwKHtJM"
"pub-28-modern-beer-taps.jpg|KMWd5kYTbww"
"pub-29-chrome-beer-taps.jpg|jCbSVZU5DZs"
"drink-30-whisky-sour-london.jpg|nP2YtFPGIA0"
"drink-31-moody-cocktail-closeup.jpg|PLrZt6bdMZM"
"drink-32-yellow-citrus-cocktail.jpg|u1Bq-w53CSw"
"drink-33-rooftop-bar-cocktail.jpg|Hs_h11UX858"
"drink-34-margarita-closeup.jpg|ZLwCnH2RpX4"
"drink-35-polished-cocktail-table.jpg|l6SqMfEaje4"
)

ok=0
for item in "${items[@]}"; do
  filename="${item%%|*}"
  id="${item#*|}"
  out="$DEST/$filename"
  page_url="https://unsplash.com/photos/$id"
  echo "Resolving $filename"
  html="$(mktemp)"
  if curl -A "Mozilla/5.0" -L --fail --retry 3 --retry-delay 2 --connect-timeout 20 --max-time 60 "$page_url" -o "$html"; then
    image_url="$(python3 - "$html" <<'PY'
import html, re, sys
text = open(sys.argv[1], encoding="utf-8", errors="ignore").read()
patterns = [
    r'<meta[^>]+property=["\x27]og:image["\x27][^>]+content=["\x27]([^"\x27]+)',
    r'<meta[^>]+content=["\x27]([^"\x27]+)["\x27][^>]+property=["\x27]og:image["\x27]',
    r'<meta[^>]+name=["\x27]twitter:image["\x27][^>]+content=["\x27]([^"\x27]+)',
]
for pattern in patterns:
    m = re.search(pattern, text, re.I)
    if m:
        print(html.unescape(m.group(1)))
        break
PY
)"
    rm -f "$html"
    if [[ -n "$image_url" ]]; then
      echo "Downloading $filename"
      if curl -A "Mozilla/5.0" -L --fail --retry 4 --retry-delay 2 --connect-timeout 20 --max-time 120 "$image_url" -o "$out"; then
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
        echo "  IMAGE DOWNLOAD FAILED"
        rm -f "$out"
        echo "$filename|$id|image_download_failed" >> "$FAILS"
      fi
    else
      echo "  IMAGE URL NOT FOUND"
      echo "$filename|$id|image_url_not_found" >> "$FAILS"
    fi
  else
    rm -f "$html"
    echo "  PAGE FETCH FAILED"
    echo "$filename|$id|page_fetch_failed" >> "$FAILS"
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
