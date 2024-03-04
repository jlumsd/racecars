- name: Fix permissions
    run: |
      chmod -c -R +rX "_site/" | while read line; do
        echo "::warning title=Invalid file permissions automatically fixed::$line"
      done
  - name: Upload Pages artifact
    uses: actions/upload-pages-artifact@v2
    uses: actions/upload-pages-artifact@v3
# ...
```

@@ -62,7 +62,7 @@ steps:
        echo "::warning title=Invalid file permissions automatically fixed::$line"
      done
  - name: Upload Pages artifact
    uses: actions/upload-pages-artifact@v2
    uses: actions/upload-pages-artifact@v3
