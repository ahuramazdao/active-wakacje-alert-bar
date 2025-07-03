
# Instrukcje osadzania baneru

## Opcja 1: Bezpośrednie osadzanie HTML

Skopiuj i wklej cały kod z pliku `banner-embed.html` do edytora HTML na swojej stronie.

## Opcja 2: Iframe (po wgraniu na serwer)

Jeśli wgrasz plik `banner-embed.html` na swój serwer, możesz go osadzić przez iframe:

```html
<iframe 
    src="https://twoja-domena.pl/banner-embed.html" 
    width="100%" 
    height="80" 
    frameborder="0" 
    scrolling="no"
    style="border: none; display: block;">
</iframe>
```

## Opcja 3: GitHub Pages + CDN

1. Wgraj plik `banner-embed.html` do swojego repozytorium GitHub
2. Włącz GitHub Pages w ustawieniach repozytorium
3. Użyj iframe z adresem GitHub Pages:

```html
<iframe 
    src="https://twoja-nazwa.github.io/nazwa-repo/banner-embed.html" 
    width="100%" 
    height="80" 
    frameborder="0" 
    scrolling="no"
    style="border: none; display: block;">
</iframe>
```

## Dostosowanie wysokości

- Mobile: ~60px
- Tablet: ~70px  
- Desktop: ~80px

Możesz dostosować wysokość iframe w zależności od urządzenia:

```html
<iframe 
    src="twoj-adres-baneru.html" 
    width="100%" 
    height="80"
    frameborder="0" 
    scrolling="no"
    style="border: none; display: block; height: 60px;"
    media="(max-width: 640px)">
</iframe>
```

## Uwagi techniczne

- Baner jest w pełni responsywny
- Automatyczne przełączanie slajdów co 4 sekundy
- Kliknięcie otwiera formularz w nowej karcie
- Wszystkie style są wbudowane (inline)
- Nie wymaga zewnętrznych zależności
