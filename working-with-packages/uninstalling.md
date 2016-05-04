# Uninstalling Local and Global Packages

## Uninstalling Local Packages

<iframe src="https://www.youtube.com/embed/Z-BpYj6cSoQ" frameborder="0" allowfullscreen></iframe>

You can remove a package from your node_modules directory using `npm uninstall <package>`:

```
npm uninstall lodash
```

To remove it from the dependencies in `package.json`, you will need to use the save flag:

```
npm uninstall --save lodash
```

## Uninstalling Global Packages

Global packages can be uninstalled with `npm uninstall -g <package>`:

```
npm uninstall -g jshint
```
