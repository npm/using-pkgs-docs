# optionalDependencies

If a dependency can be used, but you would like npm to proceed if it cannot be
found or fails to install, then you may put it in the `optionalDependencies`
object.  This is a map of package name to version or url, just like the
`dependencies` object.  The difference is that build failures do not cause
installation to fail.

It is still your program's responsibility to handle the lack of the
dependency.  For example, something like this:

    try {
      var foo = require('foo')
      var fooVersion = require('foo/package.json').version
    } catch (er) {
      foo = null
    }
    if ( notGoodFooVersion(fooVersion) ) {
      foo = null
    }

    // .. then later in your program ..

    if (foo) {
      foo.doFooThings()
    }

Entries in `optionalDependencies` will override entries of the same name in
`dependencies`, so it's usually best to only put in one place.
