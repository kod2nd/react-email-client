/** @jsx React.DOM */

var App = React.createClass({
  render: function() {
    return (
<div id="layout" class="content pure-g">
    <div id="nav" class="pure-u">
        <a href="#" class="nav-menu-button">Menu</a>

        <div class="nav-inner">
            <button class="primary-button pure-button">Compose</button>

            <div class="pure-menu pure-menu-open">
                <ul>
                    <li><a href="#">Inbox <span class="email-count">(2)</span></a></li>
                    <li><a href="#">Important</a></li>
                    <li><a href="#">Sent</a></li>
                    <li><a href="#">Drafts</a></li>
                    <li><a href="#">Trash</a></li>
                    <li class="pure-menu-heading">Labels</li>
                    <li><a href="#"><span class="email-label-personal"></span>Personal</a></li>
                    <li><a href="#"><span class="email-label-work"></span>Work</a></li>
                    <li><a href="#"><span class="email-label-travel"></span>Travel</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div id="list" class="pure-u-1">
        <div class="email-item email-item-selected pure-g">
            <div class="pure-u">
                <img class="email-avatar" alt="Tilo Mitra&#x27;s avatar" height="64" width="64" src="img/common/tilo-avatar.png" />
            </div>

            <div class="pure-u-3-4">
                <h5 class="email-name">Tilo Mitra</h5>
                <h4 class="email-subject">Hello from Toronto</h4>
                <p class="email-desc">
                    Hey, I just wanted to check in with you from Toronto. I got here earlier today.
                </p>
            </div>
        </div>

        <div class="email-item email-item-unread pure-g">
            <div class="pure-u">
                <img class="email-avatar" alt="Eric Ferraiuolo&#x27;s avatar" height="64" width="64" src="img/common/ericf-avatar.png" />
            </div>

            <div class="pure-u-3-4">
                <h5 class="email-name">Eric Ferraiuolo</h5>
                <h4 class="email-subject">Re: Pull Requests</h4>
                <p class="email-desc">
                    Hey, I had some feedback for pull request #51. We should center the menu so it looks better on mobile.
                </p>
            </div>
        </div>

        <div class="email-item email-item-unread pure-g">
            <div class="pure-u">
                <img class="email-avatar" alt="YUI&#x27;s avatar" height="64" width="64" src="img/common/yui-avatar.png" />
            </div>

            <div class="pure-u-3-4">
                <h5 class="email-name">YUI Library</h5>
                <h4 class="email-subject">You have 5 bugs assigned to you</h4>
                <p class="email-desc">
                    Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla.
                </p>
            </div>
        </div>

        <div class="email-item pure-g">
            <div class="pure-u">
                <img class="email-avatar" alt="Reid Burke&#x27;s avatar" height="64" width="64" src="img/common/reid-avatar.png" />
            </div>

            <div class="pure-u-3-4">
                <h5 class="email-name">Reid Burke</h5>
                <h4 class="email-subject">Re: Design Language</h4>
                <p class="email-desc">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                </p>
            </div>
        </div>

        <div class="email-item pure-g">
            <div class="pure-u">
                <img class="email-avatar" alt="Andrew Wooldridge&#x27;s avatar" height="64" width="64" src="img/common/andrew-avatar.png" />
            </div>

            <div class="pure-u-3-4">
                <h5 class="email-name">Andrew Wooldridge</h5>
                <h4 class="email-subject">YUI Blog Updates?</h4>
                <p class="email-desc">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
            </div>
        </div>

        <div class="email-item pure-g">
            <div class="pure-u">
                <img class="email-avatar" alt="Yahoo! Finance&#x27;s Avatar" height="64" width="64" src="img/common/yfinance-avatar.png" />
            </div>

            <div class="pure-u-3-4">
                <h5 class="email-name">Yahoo! Finance</h5>
                <h4 class="email-subject">How to protect your finances from winter storms</h4>
                <p class="email-desc">
                    Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris.
                </p>
            </div>
        </div>

        <div class="email-item pure-g">
            <div class="pure-u">
                <img class="email-avatar" alt="Yahoo! News&#x27; avatar" height="64" width="64" src="img/common/ynews-avatar.png" />

            </div>

            <div class="pure-u-3-4">
                <h5 class="email-name">Yahoo! News</h5>
                <h4 class="email-subject">Summary for April 3rd, 2012</h4>
                <p class="email-desc">
                    We found 10 news articles that you may like.
                </p>
            </div>
        </div>
    </div>

    <div id="main" class="pure-u-1">
        <div class="email-content">
            <div class="email-content-header pure-g">
                <div class="pure-u-1-2">
                    <h1 class="email-content-title">Hello from Toronto</h1>
                    <p class="email-content-subtitle">
                        From <a>Tilo Mitra</a> at <span>3:56pm, April 3, 2012</span>
                    </p>
                </div>

                <div class="email-content-controls pure-u-1-2">
                    <button class="secondary-button pure-button">Reply</button>
                    <button class="secondary-button pure-button">Forward</button>
                    <button class="secondary-button pure-button">Move to</button>
                </div>
            </div>

            <div class="email-content-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt. Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris. Curabitur ornare arcu quis mi blandit laoreet. Vivamus imperdiet fermentum mauris, ac posuere urna tempor at. Duis pellentesque justo ac sapien aliquet egestas. Morbi enim mi, porta eget ullamcorper at, pharetra id lorem.
                </p>
                <p>
                    Donec sagittis dolor ut quam pharetra pretium varius in nibh. Suspendisse potenti. Donec imperdiet, velit vel adipiscing bibendum, leo eros tristique augue, eu rutrum lacus sapien vel quam. Nam orci arcu, luctus quis vestibulum ut, ullamcorper ut enim. Morbi semper erat quis orci aliquet condimentum. Nam interdum mauris sed massa dignissim rhoncus.
                </p>
                <p>
                    Regards,<br />
                    Tilo
                </p>
            </div>
        </div>
    </div>
</div>
    );
  }
});

React.renderComponent(<App />, document.body);

