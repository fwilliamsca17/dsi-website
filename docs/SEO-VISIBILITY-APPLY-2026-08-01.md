# SEO Visibility Apply — https://trustdsi.com

**Date:** 2026-08-01  
**SOP:** GIG `docs/CLIENT-SEO-VISIBILITY-SOP.md`  
**Label:** DSI  

## Changes this pass

- robots: add Host (preferred production host)
- llms.txt: added where missing (WCG, Next Move)

## Post-deploy verify

```bash
curl -sL https://trustdsi.com/robots.txt | rg -n 'Host:|Sitemap:|GPTBot'
curl -sI -A GPTBot https://trustdsi.com/ | head -5
curl -sL https://trustdsi.com/llms.txt | head -10
```
