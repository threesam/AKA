<script>
  let { data } = $props();
  const { settings, press } = $derived(data);

  import SEO from "$lib/components/SEO.svelte";
  import { generateStructuredDataHTML } from "$lib/utils/structuredData";
</script>

<SEO
  title="Press"
  description="Press coverage and media appearances featuring Eleanor Goldfield"
  {...settings}
/>

<svelte:head>
  {@html generateStructuredDataHTML("webpage", {
    title: "Press",
    description:
      "Press coverage and media appearances featuring Eleanor Goldfield",
    url: "/press",
  })}
</svelte:head>

<div class="press-page">
  <header class="press-header">
    <h1>Press</h1>
    <p class="press-subtitle">
      Media appearances and press coverage featuring Eleanor Goldfield
    </p>
  </header>

  <div class="press-content">
    <iframe
      loading="lazy"
      src="https://www.youtube-nocookie.com/embed/L9TYGhHEK28"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
      title="This is Left: Art as Activism - Eleanor Goldfield"
    ></iframe>
    <h2>
      On
      <em>The Jimmy Dore Show</em>
    </h2>
    <iframe
      loading="lazy"
      src="https://www.youtube-nocookie.com/embed/l2niWG-d-JM"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
      title="Worker Uprisings! West Virginia's Hard Road with filmmaker Eleanor Goldfield!"
    ></iframe>
    <h2>
      On
      <em>Breakthrough News</em>
      with Eugene Puryear (
      <em>
        My segment begins ca. 43:00)
        <br />
      </em>
    </h2>
    <iframe
      loading="lazy"
      src="https://www.youtube-nocookie.com/embed/79Igdd1XOiY?start=2581"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
      title="What's Behind the New Cold War on China?"
    ></iframe>
    <h2>
      On
      <em>Economic Update</em>
      with Richard Wolff
    </h2>
    <p>
      <iframe
        loading="lazy"
        src="https://www.youtube-nocookie.com/embed/hrdObKBYvnM?start=890"
        width="560"
        height="315"
        frameborder="0"
        allowfullscreen
      title="Economic Update: Working Class Radicalism"
    ></iframe>
    </p>
    <h2>
      On Revolutionary Road Radio
      <em>(My segment begins ca. 17:24)</em>
    </h2>
    <a
      href="http://www.internetradiopros.com/revolutionary/?name=2020-06-22_zrevolutionary062220.mp3"
    >
      Revolutionary Road Radio episode
    </a>
    <h2>
      On
      <em>Redacted Tonight</em>
      with Lee Camp
    </h2>
    <iframe
      loading="lazy"
      src="https://www.youtube-nocookie.com/embed/9NjhCtFBSk4"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
      title="On Redacted Tonight with Lee Camp"
    ></iframe>
    <h2>
      On
      <em>Project Censored Radio</em>
      with Mickey Huff
      <em>(My segment begins ca. 27:45)</em>
    </h2>
    <a
      href="https://www.projectcensored.org/robin-andersen-and-eleanor-goldfield/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Project Censored: Robin Andersen and Eleanor Goldfield
    </a>
    <h2>
      On Loud &amp; Clear with Brian Becker&#8217;s segment &#8220;Women &amp;
      Society&#8221;
      <em>(My segment begins ca. 1:28:00)</em>
    </h2>
    <p>
      <a
        class="spreaker-player"
        href="https://www.spreaker.com/user/radiosputnik/syrian-government-kurds-forge-new-allian_1"
        data-resource="episode_id=19524259"
        data-theme="light"
        data-autoplay="false"
        data-playlist="false"
        data-cover="https://d3wo5wojvuv7l.cloudfront.net/images.spreaker.com/original/a59b15ee9c65c3b2c6f944b30f3d12a1.jpg"
        data-width="100%"
        data-height="400px"
      >
        Listen to &#8220;Syrian Government &amp; Kurds Forge New Alliance as
        Turkey Invades&#8221; on Spreaker.
      </a>
    </p>
    <h2>
      On Economic Update with Richard Wolff discussing art and activism in
      today&#8217;s political landscape
    </h2>
    <p>
      <iframe
        loading="lazy"
        src="https://www.youtube-nocookie.com/embed/ciDfOyMrIOE?start=905"
        width="560"
        height="315"
        frameborder="0"
        allowfullscreen
      title="Economic Update: Political Activism's Revival"
    ></iframe>
    </p>
    <h2>
      On
      <em>Project Censored Radio</em>
      with Mickey Huff: art, activism &amp; censored stories
    </h2>
    <h2>
      <a
        href="http://projectcensored.org/podcast/art-activism-eleanor-goldfield/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Project Censored podcast: art &amp; activism
      </a>
    </h2>
    <h2>
      On Lee Camp&#8217;s
      <em>Redacted Tonight</em>
      talking &#8220;Paradigm Lost,&#8221; activism &amp; art.
    </h2>
    <iframe
      loading="lazy"
      src="https://www.youtube-nocookie.com/embed/3At0gECPF-8"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
      title="On Lee Camp&#8217;s Redacted Tonight talking &#8220;Paradigm Lost,&#8221; activism &amp; art."
    ></iframe>

    <h2>
      Me v. A Republican on Basic Human Rights
      <em>(The Big Picture)</em>
    </h2>
    <iframe
      loading="lazy"
      src="https://www.youtube-nocookie.com/embed/c05oee-_H6o"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
      title="Me v. A Republican on Basic Human Rights (The Big Picture)"
    ></iframe>
    <h2>
      The FBI&#8217;s Attack on Activists, Violence &amp; The Path Ahead. (
      <em>Watching the Hawks</em>
      RT America)
    </h2>
    <iframe
      loading="lazy"
      src="https://www.youtube-nocookie.com/embed/8hKSTRFRrV8"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
      title="The FBI&#8217;s Attack on Activists, Violence &amp; The Path Ahead. (Watching the Hawks RT America)"
    ></iframe>
    <h2>
      Interviewed by Daniel Falcone for
      <a
        href="http://www.truth-out.org/speakout/item/39292-notes-on-the-2017-women-s-march-an-interview-with-eleanor-goldfield"
      >
        Truthout
      </a>
    </h2>
    <h2>
      On Thom Hartmann&#8217;s
      <em>The Big Picture</em>
    </h2>
    <iframe
      loading="lazy"
      src="https://www.youtube-nocookie.com/embed/DprAGKlbd6A"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
      title="On Thom Hartmann&#8217;s The Big Picture"
    ></iframe>
    <h2>
      On RT America&#8217;s
      <em>Watching the Hawks</em>
    </h2>
    <h2>
      (Includes footage from live acoustic show in Los Angeles &#8211; Oliver
      Stone in 2nd half)
    </h2>
    <iframe
      loading="lazy"
      src="https://www.youtube-nocookie.com/embed/GeO1guqeBG4"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
      title="(Includes footage from live acoustic show in Los Angeles &#8211; Oliver Stone in 2nd half)"
    ></iframe>
    <h2>
      On RT America&#8217;s
      <em>Watching the Hawks</em>
    </h2>
    <p>
      <iframe
        loading="lazy"
        src="https://www.youtube-nocookie.com/embed/6I4yBoduHfo"
        width="560"
        height="315"
        frameborder="0"
        allowfullscreen
      title="On RT America&#8217;s Watching the Hawks"
    ></iframe>
    </p>
    <h2>
      On KPFK&#8217;s
      <em>Moxie Poetic</em>
      with Sydni Phelps
    </h2>
    <iframe
      loading="lazy"
      width="1100"
      height="400"
      scrolling="no"
      frameborder="no"
      src="https://w.soundcloud.com/player/?visual=true&#038;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F242959975&#038;show_artwork=true&#038;maxwidth=1100&#038;maxheight=1000&#038;dnt=1"
      title="On KPFK&#8217;s Moxie Poetic with Sydni Phelps"
    ></iframe>
    <h2>
      On Lee Camp&#8217;s show
      <em>Redacted Tonight</em>
    </h2>
    <iframe
      loading="lazy"
      src="https://www.youtube-nocookie.com/embed/f8PUQ3zRVkc"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
      title="On Lee Camp&#8217;s show Redacted Tonight"
    ></iframe>
    <h2>
      Eleanor&#8217;s image from the #LA2Ferguson protests goes viral on several
      news sites.
    </h2>
    <p>
      Famed AP photographer Nick Ut (best known for his &#8220;Napalm
      Girl&#8221; image during Vietnam) snapped an image of Eleanor at LAPD HQ
      on November 25th, 2014 during the LA solidarity protests against the
      Ferguson decision to not indict Darren Wilson in the shooting of Mike
      Brown. The image went viral, shared on
      <a href="https://twitter.com/FoxNews/status/537502904018800641/photo/1">
        Fox News
      </a>
      ,
      <a
        href="https://time.com/3607572/national-ferguson-protests-new-york-oakland-washington-atlanta/"
      >
        TIME magazine
      </a>
      , Google news and several international news outlets.
    </p>
    <p>
      Her first hand account of the actions was also shared by
      <a
        href="http://www.laprogressive.com/la-ferguson-protests/?utm_source=LA%20Progressive%20Newsletter&amp;utm_campaign=e515192bec-LAP_News_17April12&amp;utm_medium=email&amp;utm_term=0_9f184a8aad-e515192bec-286705649"
      >
        LA Progressive
      </a>
      .
    </p>
    <h2>
      Eleanor on Abby Martin&#8217;s &#8220;Breaking the Set&#8221; discussing
      overturning Citizens United (SJR19)
    </h2>
    <iframe
      loading="lazy"
      width="1100"
      height="619"
      src="https://www.youtube-nocookie.com/embed/Nt8KqG-Z2h8?start=480&#038;feature=oembed"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope;
                  picture-in-picture"
      allowfullscreen
      title="Eleanor on Abby Martin&#8217;s &#8220;Breaking the Set&#8221; discussing overturning Citizens United (SJR19)"
    ></iframe>
    <h2>
      Eleanor on Dennis Trainor Jr.&#8217;s &#8220;
      <em>Acronym TV&#8221;</em>
    </h2>
    <iframe
      loading="lazy"
      src="//www.youtube.com/embed/AksJuVAs2mc"
      width="560"
      height="315"
      frameborder="0"
      allowfullscreen
      title="Eleanor on Dennis Trainor Jr.&#8217;s &#8220; Acronym TV&#8221;"
    ></iframe>
    <h2>
      Eleanor Interviewed on Abby Martin&#8217;s
      <em>Breaking the Set</em>
    </h2>
    <iframe
      loading="lazy"
      src="//www.youtube.com/embed/tnuD4S1j5BU?rel=0"
      width="853"
      height="480"
      frameborder="0"
      allowfullscreen
      title="Eleanor Interviewed on Abby Martin&#8217;s Breaking the Set"
    ></iframe>
    <h2>SOMA magazine</h2>
    
    <h2>
      Eleanor Goldfield Featured in Italian Magazine GIOIA for MLK, Jr.
      Anniversary
    </h2>
  </div>
</div>

<style>
  .press-page {
    min-height: 100vh;
    padding: 2rem var(--containerPadding);
    max-width: 1200px;
    margin: 0 auto;
  }

  .press-header {
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--primary);
  }

  .press-header h1 {
    font-size: var(--bigH);
    margin: 0 0 1rem 0;
    color: var(--primary);
  }

  .press-subtitle {
    font-size: var(--h4);
    color: var(--textColor);
    opacity: 0.8;
    margin: 0;
  }

  .press-content {
    display: grid;
    gap: 3rem;
  }

  /* Video Embeds */
  iframe {
    width: 100%;
    max-width: 560px;
    height: 315px;
    border: 2px solid var(--textColor);
    border-radius: 8px;
    margin: 1rem 0;
    transition: all 0.3s ease;
  }

  iframe:hover {
    border-color: var(--primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Headings */
  h2 {
    font-size: var(--h3);
    margin: 2rem 0 1rem 0;
    color: var(--primary);
    border-left: 4px solid var(--primary);
    padding-left: 1rem;
  }

  /* Links */
  a {
    color: var(--primary);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;
  }

  a:hover {
    color: var(--textColor);
    border-bottom-color: var(--primary);
    transform: translateY(-1px);
  }

  /* External links */
  a[target="_blank"]:after {
    content: "↗";
    margin-left: 0.25rem;
    font-size: 0.8em;
    opacity: 0.7;
  }

  /* Paragraphs */
  p {
    line-height: 1.6;
    margin: 1rem 0;
    color: var(--textColor);
  }

  /* Emphasis */
  em {
    color: var(--primary);
    font-style: italic;
  }

  /* Spreaker player links */
  .spreaker-player {
    display: inline-block;
    background: var(--primary);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: bold;
    text-align: center;
    margin: 1rem 0;
    transition: all 0.3s ease;
  }

  .spreaker-player:hover {
    background: var(--textColor);
    color: var(--background);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .press-page {
      padding: 1rem var(--containerPadding);
    }

    .press-header h1 {
      font-size: var(--h1);
    }

    .press-subtitle {
      font-size: var(--h5);
    }

    h2 {
      font-size: var(--h4);
    }

    iframe {
      height: 200px;
    }
  }


  /* Video section styling */
  .press-content > iframe:first-of-type {
    margin-top: 0;
  }
</style>
