<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>canvas-toBlob.js/canvas-toBlob.js at master · eligrey/canvas-toBlob.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="/pfDevIeWsDwNI3b9QXtAJ3jn5Wcioa5zmiW6+vxtLU=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-f1b15586bc7135fa37ec5f848fbde916e7041f23.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-749329f6bc4f0f2842535f983d87bfdf7d109c41.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-bc374985e8441015fc645eca5b08988b6eadc695.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="e19b657653c304732a1ecdfa62d57114">

        <link data-pjax-transient rel='permalink' href='/eligrey/canvas-toBlob.js/blob/d2b15dbcf9c3a2584e666107dfd5b0ba17b9e8a9/canvas-toBlob.js'>
    <meta property="og:title" content="canvas-toBlob.js"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/eligrey/canvas-toBlob.js"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/f43206cf935c8a5d532285c0d67b20d1?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="canvas-toBlob.js - A canvas.toBlob() implementation"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="eligrey/canvas-toBlob.js"/>

    <meta name="description" content="canvas-toBlob.js - A canvas.toBlob() implementation" />

  <link href="https://github.com/eligrey/canvas-toBlob.js/commits/master.atom" rel="alternate" title="Recent Commits to canvas-toBlob.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob macintosh vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-icon mega-icon-invertocat"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  ">
            <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="SarahVang" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="cmdform">

    <input type="hidden" class="js-repository-name-with-owner" value="eligrey/canvas-toBlob.js"/>
    <input type="hidden" class="js-repository-branch" value="master"/>
    <input type="hidden" class="js-repository-tree-sha" value="00f063a707f000221810af93a5f12efbf724da9e"/>

  <div class="divider-vertical"></div>
</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="https://github.com/SarahVang" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/a0e53380297b98d8e09dc3310f343a86?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> SarahVang
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="mini-icon mini-icon-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings (You have no verified emails)">
            <span class="mini-icon mini-icon-account-settings"></span>
              <span class="setting_warning">!</span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  <ul class="dropdown-menu">
    <li>
      <a href="/new"><span class="mini-icon mini-icon-create"></span> New repository</a>
    </li>
    <li>
        <a href="https://github.com/eligrey/canvas-toBlob.js/issues/new"><span class="mini-icon mini-icon-issue-opened"></span> New issue</a>
    </li>
    <li>
    </li>
    <li>
      <a href="/organizations/new"><span class="mini-icon mini-icon-u-list"></span> New organization</a>
    </li>
  </ul>
</div>


    
  </div>
</div>

      

      <div class="global-notice warn"><div class="global-notice-inner"><h2>You don't have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.</h2><p>Email verification will help our support team help you in case you have any email issues or lose your password.</p></div></div>

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="/pfDevIeWsDwNI3b9QXtAJ3jn5Wcioa5zmiW6+vxtLU=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2051197" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/eligrey/canvas-toBlob.js/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/eligrey/canvas-toBlob.js/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/eligrey/canvas-toBlob.js/stargazers">49</a>
    </li>

        <li>
          <a href="/eligrey/canvas-toBlob.js/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/eligrey/canvas-toBlob.js/network" class="social-count">9</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/eligrey" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">eligrey</span>
                  </a></span> /
                <strong><a href="/eligrey/canvas-toBlob.js" class="js-current-repository">canvas-toBlob.js</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/eligrey/canvas-toBlob.js/pulse" class="js-selected-navigation-item " data-selected-links="pulse /eligrey/canvas-toBlob.js/pulse" rel="nofollow"><span class="mini-icon mini-icon-pulse"></span></a></li>
    <li><a href="/eligrey/canvas-toBlob.js" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /eligrey/canvas-toBlob.js">Code</a></li>
    <li><a href="/eligrey/canvas-toBlob.js/network" class="js-selected-navigation-item " data-selected-links="repo_network /eligrey/canvas-toBlob.js/network">Network</a></li>
    <li><a href="/eligrey/canvas-toBlob.js/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /eligrey/canvas-toBlob.js/pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/eligrey/canvas-toBlob.js/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /eligrey/canvas-toBlob.js/issues">Issues <span class='counter'>1</span></a></li>

      <li><a href="/eligrey/canvas-toBlob.js/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /eligrey/canvas-toBlob.js/wiki">Wiki</a></li>


    <li><a href="/eligrey/canvas-toBlob.js/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /eligrey/canvas-toBlob.js/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/eligrey/canvas-toBlob.js/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /eligrey/canvas-toBlob.js/tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/eligrey/canvas-toBlob.js/blob/master/canvas-toBlob.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/eligrey/canvas-toBlob.js" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /eligrey/canvas-toBlob.js">Files</a></li>
    <li><a href="/eligrey/canvas-toBlob.js/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /eligrey/canvas-toBlob.js/commits/master">Commits</a></li>
    <li><a href="/eligrey/canvas-toBlob.js/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /eligrey/canvas-toBlob.js/branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:bd4fb07a82849d0776ad8d446ef5d675 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:bd4fb07a82849d0776ad8d446ef5d675 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/eligrey/canvas-toBlob.js" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">canvas-toBlob.js</span></a></span></span><span class="separator"> / </span><strong class="final-path">canvas-toBlob.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="canvas-toBlob.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/eligrey/canvas-toBlob.js/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/a0934b8846daf6fc88c2a19672cb3b68?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><span rel="author">noway421</span></span>
    <time class="js-relative-date" datetime="2013-01-24T02:37:48-08:00" title="2013-01-24 02:37:48">January 24, 2013</time>
    <div class="commit-title">
        <a href="/eligrey/canvas-toBlob.js/commit/20db0dea59f09261ad5c7c632d948d04bf13eb85" class="message">Change ArrayBuffer to ArrayBufferView</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="eligrey" href="/eligrey/canvas-toBlob.js/commits/master/canvas-toBlob.js?author=eligrey"><img height="20" src="https://secure.gravatar.com/avatar/f43206cf935c8a5d532285c0d67b20d1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="eboyjr" href="/eligrey/canvas-toBlob.js/commits/master/canvas-toBlob.js?author=eboyjr"><img height="20" src="https://secure.gravatar.com/avatar/046ed2021abbff1d4d7812ad44dbb4af?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f43206cf935c8a5d532285c0d67b20d1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/eligrey">eligrey</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/046ed2021abbff1d4d7812ad44dbb4af?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/eboyjr">eboyjr</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/eligrey/canvas-toBlob.js/blob/d2b15dbcf9c3a2584e666107dfd5b0ba17b9e8a9/canvas-toBlob.js" data-title="canvas-toBlob.js/canvas-toBlob.js at master · eligrey/canvas-toBlob.js · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>108 lines (104 sloc)</span>
                <span>2.96 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/eligrey/canvas-toBlob.js/edit/master/canvas-toBlob.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/eligrey/canvas-toBlob.js/raw/master/canvas-toBlob.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/eligrey/canvas-toBlob.js/blame/master/canvas-toBlob.js" class="button minibutton ">Blame</a>
                  <a href="/eligrey/canvas-toBlob.js/commits/master/canvas-toBlob.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/* canvas-toBlob.js</span></div><div class='line' id='LC2'><span class="cm"> * A canvas.toBlob() implementation.</span></div><div class='line' id='LC3'><span class="cm"> * 2011-07-13</span></div><div class='line' id='LC4'><span class="cm"> * </span></div><div class='line' id='LC5'><span class="cm"> * By Eli Grey, http://eligrey.com and Devin Samarin, https://github.com/eboyjr</span></div><div class='line' id='LC6'><span class="cm"> * License: X11/MIT</span></div><div class='line' id='LC7'><span class="cm"> *   See LICENSE.md</span></div><div class='line' id='LC8'><span class="cm"> */</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="cm">/*global self */</span></div><div class='line' id='LC11'><span class="cm">/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,</span></div><div class='line' id='LC12'><span class="cm">  plusplus: true */</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="cm">/*! @source http://purl.eligrey.com/github/canvas-toBlob.js/blob/master/canvas-toBlob.js */</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">view</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'><span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC18'><span class="kd">var</span></div><div class='line' id='LC19'>	  <span class="nx">Uint8Array</span> <span class="o">=</span> <span class="nx">view</span><span class="p">.</span><span class="nx">Uint8Array</span></div><div class='line' id='LC20'>	<span class="p">,</span> <span class="nx">HTMLCanvasElement</span> <span class="o">=</span> <span class="nx">view</span><span class="p">.</span><span class="nx">HTMLCanvasElement</span></div><div class='line' id='LC21'>	<span class="p">,</span> <span class="nx">is_base64_regex</span> <span class="o">=</span> <span class="sr">/\s*;\s*base64\s*(?:;|$)/i</span></div><div class='line' id='LC22'>	<span class="p">,</span> <span class="nx">base64_ranks</span></div><div class='line' id='LC23'>	<span class="p">,</span> <span class="nx">decode_base64</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">base64</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'>		<span class="kd">var</span></div><div class='line' id='LC25'>			  <span class="nx">len</span> <span class="o">=</span> <span class="nx">base64</span><span class="p">.</span><span class="nx">length</span></div><div class='line' id='LC26'>			<span class="p">,</span> <span class="nx">buffer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">len</span> <span class="o">/</span> <span class="mi">4</span> <span class="o">*</span> <span class="mi">3</span> <span class="o">|</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC27'>			<span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC28'>			<span class="p">,</span> <span class="nx">outptr</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC29'>			<span class="p">,</span> <span class="nx">last</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">]</span></div><div class='line' id='LC30'>			<span class="p">,</span> <span class="nx">state</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC31'>			<span class="p">,</span> <span class="nx">save</span> <span class="o">=</span> <span class="mi">0</span></div><div class='line' id='LC32'>			<span class="p">,</span> <span class="nx">rank</span></div><div class='line' id='LC33'>			<span class="p">,</span> <span class="nx">code</span></div><div class='line' id='LC34'>			<span class="p">,</span> <span class="nx">undef</span></div><div class='line' id='LC35'>		<span class="p">;</span></div><div class='line' id='LC36'>		<span class="k">while</span> <span class="p">(</span><span class="nx">len</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC37'>			<span class="nx">code</span> <span class="o">=</span> <span class="nx">base64</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="o">++</span><span class="p">);</span></div><div class='line' id='LC38'>			<span class="nx">rank</span> <span class="o">=</span> <span class="nx">base64_ranks</span><span class="p">[</span><span class="nx">code</span><span class="o">-</span><span class="mi">43</span><span class="p">];</span></div><div class='line' id='LC39'>			<span class="k">if</span> <span class="p">(</span><span class="nx">rank</span> <span class="o">!==</span> <span class="mi">255</span> <span class="o">&amp;&amp;</span> <span class="nx">rank</span> <span class="o">!==</span> <span class="nx">undef</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>				<span class="nx">last</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">last</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC41'>				<span class="nx">last</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="nx">code</span><span class="p">;</span></div><div class='line' id='LC42'>				<span class="nx">save</span> <span class="o">=</span> <span class="p">(</span><span class="nx">save</span> <span class="o">&lt;&lt;</span> <span class="mi">6</span><span class="p">)</span> <span class="o">|</span> <span class="nx">rank</span><span class="p">;</span></div><div class='line' id='LC43'>				<span class="nx">state</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC44'>				<span class="k">if</span> <span class="p">(</span><span class="nx">state</span> <span class="o">===</span> <span class="mi">4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>					<span class="nx">buffer</span><span class="p">[</span><span class="nx">outptr</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">save</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC46'>					<span class="k">if</span> <span class="p">(</span><span class="nx">last</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">!==</span> <span class="mi">61</span> <span class="cm">/* padding character */</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>						<span class="nx">buffer</span><span class="p">[</span><span class="nx">outptr</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">save</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">8</span><span class="p">;</span></div><div class='line' id='LC48'>					<span class="p">}</span></div><div class='line' id='LC49'>					<span class="k">if</span> <span class="p">(</span><span class="nx">last</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">!==</span> <span class="mi">61</span> <span class="cm">/* padding character */</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC50'>						<span class="nx">buffer</span><span class="p">[</span><span class="nx">outptr</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">save</span><span class="p">;</span></div><div class='line' id='LC51'>					<span class="p">}</span></div><div class='line' id='LC52'>					<span class="nx">state</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC53'>				<span class="p">}</span></div><div class='line' id='LC54'>			<span class="p">}</span></div><div class='line' id='LC55'>		<span class="p">}</span></div><div class='line' id='LC56'>		<span class="c1">// 2/3 chance there&#39;s going to be some null bytes at the end, but that</span></div><div class='line' id='LC57'>		<span class="c1">// doesn&#39;t really matter with most image formats.</span></div><div class='line' id='LC58'>		<span class="c1">// If it somehow matters for you, truncate the buffer up outptr.</span></div><div class='line' id='LC59'>		<span class="k">return</span> <span class="nx">buffer</span><span class="p">;</span></div><div class='line' id='LC60'>	<span class="p">}</span></div><div class='line' id='LC61'><span class="p">;</span></div><div class='line' id='LC62'><span class="k">if</span> <span class="p">(</span><span class="nx">Uint8Array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC63'>	<span class="nx">base64_ranks</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">([</span></div><div class='line' id='LC64'>		  <span class="mi">62</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="mi">63</span><span class="p">,</span> <span class="mi">52</span><span class="p">,</span> <span class="mi">53</span><span class="p">,</span> <span class="mi">54</span><span class="p">,</span> <span class="mi">55</span><span class="p">,</span> <span class="mi">56</span><span class="p">,</span> <span class="mi">57</span><span class="p">,</span> <span class="mi">58</span><span class="p">,</span> <span class="mi">59</span><span class="p">,</span> <span class="mi">60</span><span class="p">,</span> <span class="mi">61</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span></div><div class='line' id='LC65'>		<span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span>  <span class="mi">0</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span>  <span class="mi">0</span><span class="p">,</span>  <span class="mi">1</span><span class="p">,</span>  <span class="mi">2</span><span class="p">,</span>  <span class="mi">3</span><span class="p">,</span>  <span class="mi">4</span><span class="p">,</span>  <span class="mi">5</span><span class="p">,</span>  <span class="mi">6</span><span class="p">,</span>  <span class="mi">7</span><span class="p">,</span>  <span class="mi">8</span><span class="p">,</span>  <span class="mi">9</span></div><div class='line' id='LC66'>		<span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="mi">13</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">17</span><span class="p">,</span> <span class="mi">18</span><span class="p">,</span> <span class="mi">19</span><span class="p">,</span> <span class="mi">20</span><span class="p">,</span> <span class="mi">21</span><span class="p">,</span> <span class="mi">22</span><span class="p">,</span> <span class="mi">23</span><span class="p">,</span> <span class="mi">24</span><span class="p">,</span> <span class="mi">25</span></div><div class='line' id='LC67'>		<span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="mi">26</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">28</span><span class="p">,</span> <span class="mi">29</span><span class="p">,</span> <span class="mi">30</span><span class="p">,</span> <span class="mi">31</span><span class="p">,</span> <span class="mi">32</span><span class="p">,</span> <span class="mi">33</span><span class="p">,</span> <span class="mi">34</span><span class="p">,</span> <span class="mi">35</span></div><div class='line' id='LC68'>		<span class="p">,</span> <span class="mi">36</span><span class="p">,</span> <span class="mi">37</span><span class="p">,</span> <span class="mi">38</span><span class="p">,</span> <span class="mi">39</span><span class="p">,</span> <span class="mi">40</span><span class="p">,</span> <span class="mi">41</span><span class="p">,</span> <span class="mi">42</span><span class="p">,</span> <span class="mi">43</span><span class="p">,</span> <span class="mi">44</span><span class="p">,</span> <span class="mi">45</span><span class="p">,</span> <span class="mi">46</span><span class="p">,</span> <span class="mi">47</span><span class="p">,</span> <span class="mi">48</span><span class="p">,</span> <span class="mi">49</span><span class="p">,</span> <span class="mi">50</span><span class="p">,</span> <span class="mi">51</span></div><div class='line' id='LC69'>	<span class="p">]);</span></div><div class='line' id='LC70'><span class="p">}</span></div><div class='line' id='LC71'><span class="k">if</span> <span class="p">(</span><span class="nx">HTMLCanvasElement</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">HTMLCanvasElement</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toBlob</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC72'>	<span class="nx">HTMLCanvasElement</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toBlob</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">callback</span><span class="p">,</span> <span class="nx">type</span> <span class="cm">/*, ...args*/</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC73'>		  <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC74'>			<span class="nx">type</span> <span class="o">=</span> <span class="s2">&quot;image/png&quot;</span><span class="p">;</span></div><div class='line' id='LC75'>		<span class="p">}</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">mozGetAsFile</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC76'>			<span class="nx">callback</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">mozGetAsFile</span><span class="p">(</span><span class="s2">&quot;canvas&quot;</span><span class="p">,</span> <span class="nx">type</span><span class="p">));</span></div><div class='line' id='LC77'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC78'>		<span class="p">}</span></div><div class='line' id='LC79'>		<span class="kd">var</span></div><div class='line' id='LC80'>			  <span class="nx">args</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC81'>			<span class="p">,</span> <span class="nx">dataURI</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">toDataURL</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span></div><div class='line' id='LC82'>			<span class="p">,</span> <span class="nx">header_end</span> <span class="o">=</span> <span class="nx">dataURI</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;,&quot;</span><span class="p">)</span></div><div class='line' id='LC83'>			<span class="p">,</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">dataURI</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">header_end</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC84'>			<span class="p">,</span> <span class="nx">is_base64</span> <span class="o">=</span> <span class="nx">is_base64_regex</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">dataURI</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">header_end</span><span class="p">))</span></div><div class='line' id='LC85'>			<span class="p">,</span> <span class="nx">blob</span></div><div class='line' id='LC86'>		<span class="p">;</span></div><div class='line' id='LC87'>		<span class="k">if</span> <span class="p">(</span><span class="nx">Blob</span><span class="p">.</span><span class="nx">fake</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC88'>			<span class="c1">// no reason to decode a data: URI that&#39;s just going to become a data URI again</span></div><div class='line' id='LC89'>			<span class="nx">blob</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Blob</span></div><div class='line' id='LC90'>			<span class="k">if</span> <span class="p">(</span><span class="nx">is_base64</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>				<span class="nx">blob</span><span class="p">.</span><span class="nx">encoding</span> <span class="o">=</span> <span class="s2">&quot;base64&quot;</span><span class="p">;</span></div><div class='line' id='LC92'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC93'>				<span class="nx">blob</span><span class="p">.</span><span class="nx">encoding</span> <span class="o">=</span> <span class="s2">&quot;URI&quot;</span><span class="p">;</span></div><div class='line' id='LC94'>			<span class="p">}</span></div><div class='line' id='LC95'>			<span class="nx">blob</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC96'>			<span class="nx">blob</span><span class="p">.</span><span class="nx">size</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC97'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">Uint8Array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC98'>			<span class="k">if</span> <span class="p">(</span><span class="nx">is_base64</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC99'>				<span class="nx">blob</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Blob</span><span class="p">([</span><span class="nx">decode_base64</span><span class="p">(</span><span class="nx">data</span><span class="p">)],</span> <span class="p">{</span><span class="nx">type</span><span class="o">:</span> <span class="nx">type</span><span class="p">});</span></div><div class='line' id='LC100'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC101'>				<span class="nx">blob</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Blob</span><span class="p">([</span><span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">data</span><span class="p">)],</span> <span class="p">{</span><span class="nx">type</span><span class="o">:</span> <span class="nx">type</span><span class="p">});</span></div><div class='line' id='LC102'>			<span class="p">}</span></div><div class='line' id='LC103'>		<span class="p">}</span></div><div class='line' id='LC104'>		<span class="nx">callback</span><span class="p">(</span><span class="nx">blob</span><span class="p">);</span></div><div class='line' id='LC105'>	<span class="p">};</span></div><div class='line' id='LC106'><span class="p">}</span></div><div class='line' id='LC107'><span class="p">}(</span><span class="nx">self</span><span class="p">));</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1360648847" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.06005s from fe4.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/eligrey/canvas-toBlob.js/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.06063' data-host='fe4'></span>
    
  </body>
</html>

