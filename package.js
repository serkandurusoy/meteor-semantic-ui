Package.describe({
  summary: "Semantic UI packaged for meteor"
});

Package.on_use(function (api) {

  api.use('jquery','client');

  var path = Npm.require('path');
  var assetPath = path.join('lib/semantic-ui/build/uncompressed/');
  var assetFiles = [
    assetPath + 'collections/breadcrumb.css',
    assetPath + 'collections/form.css',
    assetPath + 'collections/grid.css',
    assetPath + 'collections/menu.css',
    assetPath + 'collections/message.css',
    assetPath + 'collections/table.css',
    assetPath + 'elements/basic.icon.css',
    assetPath + 'elements/button.css',
    assetPath + 'elements/divider.css',
    assetPath + 'elements/header.css',
    assetPath + 'elements/icon.css',
    assetPath + 'elements/image.css',
    assetPath + 'elements/input.css',
    assetPath + 'elements/label.css',
    assetPath + 'elements/loader.css',
    assetPath + 'elements/progress.css',
    assetPath + 'elements/reveal.css',
    assetPath + 'elements/segment.css',
    assetPath + 'elements/step.css',
    assetPath + 'fonts/basic.icons.eot',
    assetPath + 'fonts/basic.icons.svg',
    assetPath + 'fonts/basic.icons.ttf',
    assetPath + 'fonts/basic.icons.woff',
    assetPath + 'fonts/icons.eot',
    assetPath + 'fonts/icons.otf',
    assetPath + 'fonts/icons.svg',
    assetPath + 'fonts/icons.ttf',
    assetPath + 'fonts/icons.woff',
    assetPath + 'images/loader-large-inverted.gif',
    assetPath + 'images/loader-large.gif',
    assetPath + 'images/loader-medium-inverted.gif',
    assetPath + 'images/loader-medium.gif',
    assetPath + 'images/loader-mini-inverted.gif',
    assetPath + 'images/loader-mini.gif',
    assetPath + 'images/loader-small-inverted.gif',
    assetPath + 'images/loader-small.gif',
    assetPath + 'modules/accordion.css',
    assetPath + 'modules/accordion.js',
    assetPath + 'modules/behavior/api.js',
    assetPath + 'modules/behavior/colorize.js',
    assetPath + 'modules/behavior/form.js',
    assetPath + 'modules/behavior/state.js',
    assetPath + 'modules/chatroom.css',
    assetPath + 'modules/chatroom.js',
    assetPath + 'modules/checkbox.css',
    assetPath + 'modules/checkbox.js',
    assetPath + 'modules/dimmer.css',
    assetPath + 'modules/dimmer.js',
    assetPath + 'modules/dropdown.css',
    assetPath + 'modules/dropdown.js',
    assetPath + 'modules/modal.css',
    assetPath + 'modules/modal.js',
    assetPath + 'modules/nag.css',
    assetPath + 'modules/nag.js',
    assetPath + 'modules/popup.css',
    assetPath + 'modules/popup.js',
    assetPath + 'modules/rating.css',
    assetPath + 'modules/rating.js',
    assetPath + 'modules/search.css',
    assetPath + 'modules/search.js',
    assetPath + 'modules/shape.css',
    assetPath + 'modules/shape.js',
    assetPath + 'modules/sidebar.css',
    assetPath + 'modules/sidebar.js',
    assetPath + 'modules/tab.css',
    assetPath + 'modules/tab.js',
    assetPath + 'modules/transition.css',
    assetPath + 'modules/transition.js',
    assetPath + 'modules/video.css',
    assetPath + 'modules/video.js',
    assetPath + 'views/comment.css',
    assetPath + 'views/feed.css',
    assetPath + 'views/item.css',
    assetPath + 'views/list.css',
    assetPath + 'views/statistic.css'
  ];
  api.add_files(assetFiles, 'client');
  
  api.add_files('lib/fix-asset-paths-for-meteor.css', 'client');

});