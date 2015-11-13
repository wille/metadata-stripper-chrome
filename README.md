# metadata-stripper-chrome

The goal of this project is to remove unneeded metadata on common sites such as

- Facebook
- Twitter
- Google
- Imdb
- ...

## Example

When you are searching for someone on facebook in the toolbar, ```?fref=ts``` will be added to the URL.
This does not change anything on the profile that you are viewing and is completely useless for your experience.

```
https://www.facebook.com/user?fref=ts
```

will be changed to

```
https://www.facebook.com/user
```

## Credits

- [chloe](https://keybase.io/dotchloe)
- [Source 1](https://stackoverflow.com/questions/12065029/chrome-redirect-extension)
