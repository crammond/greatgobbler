<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { type Pathname } from '$app/types';
  import greatGobblerLogo from '$lib/assets/gobblerlogo.png';
  import southLogo from '$lib/assets/panther_logo.png';
  import northLogo from '$lib/assets/titan_logo.png';
  import startingLinePic from '$lib/assets/gobbler_start_2016_crop3.jpg';

  const items: { key: Pathname; name: string }[] = [
    { key: '/', name: 'Home' },
    { key: '/faq', name: 'FAQ' },
    { key: '/registration', name: 'Registration' },
    { key: '/course-information', name: 'Course Information' },
    { key: '/awards', name: 'Awards' },
    { key: '/volunteer', name: 'Volunteer' },
    { key: '/donations', name: 'Donations' },
    { key: '/sponsors', name: 'Sponsors' },
    { key: '/results', name: 'Results' }
  ];
</script>

<header class="header bg--orange text-color--white">
  <div class="header-top">
    <img src={greatGobblerLogo} height="100px" width="auto" alt="" />
    <h1 class="header-title">Great Gobbler 5k</h1>
    <label for="hamburger">&#9776;</label>
    <input type="checkbox" id="hamburger" />
    <ul class="header-nav">
      {#each items as { key, name } (key)}
        <li class="header-nav-item">
          <a class={`${key === page.url.pathname ? ' active' : ''}`} href={resolve(key)}>{name}</a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="header-bottom">
    <img src={northLogo} height="100px" width="auto" alt="" />
    <h2 style="padding: 0 20px;">
      The 23rd Annual Great Gobbler is on Thursday, November 27th 2025! Registration is open! Sign
      up now to secure your spot and receive a Gobbler shirt, available for the first 500
      registrants only!
    </h2>
    <img src={southLogo} height="100px" width="auto" alt="" />
  </div>
</header>
<img src={startingLinePic} height="auto" width="100%" alt="" />
