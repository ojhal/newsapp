import React, { Component } from "react";
import NewItem from "./NewItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "The Guardian" },
      author: "Ali Martin",
      title:
        "ECB’s Richard Gould calls banter ‘a swear word’ after Yorkshire scandal",
      description:
        "<ul><li>Confirms separate review into dressing room culture is ready</li><li>Proposed cut to County Championship ‘dead in the water’</li></ul>Richard Gould, the new ECB chief executive, has said banter is “a swear word” and that the outcomes from the Yorkshir…",
      url: "https://www.theguardian.com/sport/2023/apr/05/ecbs-richard-gould-calls-banter-a-swear-word-after-yorkshire-scandal",
      urlToImage:
        "https://i.guim.co.uk/img/media/fa1bbe6bf8332a7001a1cff22b3de1c37dfbb21b/0_175_5234_3141/master/5234.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=94c2ca61ed0953d9c76644c55c75ae12",
      publishedAt: "2023-04-05T21:00:04Z",
      content:
        "Richard Gould, the new ECB chief executive, has said banter is a swear word and that the outcomes from the Yorkshire racism scandal mean dressing rooms are now in no doubt as to what is unacceptable … [+4630 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Mark Ramprakash",
      title:
        "Yorkshire racism hearing reached one clear verdict: from now on there is no excuse | Mark Ramprakash",
      description:
        "Azeem Rafiq will have wanted vindication but at least we have a decisive understanding of what is and what is not acceptableAfter charges against him of bringing the game into disrepute were dismissed on Friday, Michael Vaughan said in what was generally a we…",
      url: "https://www.theguardian.com/sport/2023/apr/01/yorkshire-racism-hearing-reached-one-clear-verdict-from-now-on-there-is-no-excuse",
      urlToImage:
        "https://i.guim.co.uk/img/media/25a11436eda459f257d6c774d95c1929caa54814/2_141_3184_1910/master/3184.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=6b933ddd90be96a2735b99d1805a813b",
      publishedAt: "2023-04-01T12:48:38Z",
      content:
        "After charges against him of bringing the game into disrepute were dismissed on Friday, Michael Vaughan said in what was generally a well-judged statement that there are no winners in this process. T… [+5228 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title:
        "Michael Vaughan cleared of using racist language at Yorkshire, CDC hearing finds",
      description:
        "<ul><li>Cricket Discipline Commission has published its findings</li><li>Case against former England captain Vaughan not proven</li></ul>The former England captain Michael Vaughan has been cleared of using racist and/or discriminatory language and bringing th…",
      url: "https://www.theguardian.com/sport/2023/mar/31/michael-vaughan-cleared-of-using-racist-language-at-yorkshire-cdc-hearing-finds",
      urlToImage:
        "https://i.guim.co.uk/img/media/d1de64c19a60d0c3c058c673943990177ff6ecf1/0_156_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=99dd76220926a8c47d9a155a3a505c68",
      publishedAt: "2023-03-31T09:45:00Z",
      content:
        "The former England captain Michael Vaughan has been cleared of using racist and/or discriminatory language and bringing the game into disrepute by the ECBs Cricket Discipline Commission. The decision… [+1815 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Tanya Aldred",
      title:
        "‘We are raring to go’: Keith Barker primed for 15th county campaign",
      description:
        "Veteran Hampshire all-rounder played football for England at youth level but is now a County Championship mainstayWhen Keith Barker and his older brother Dean were growing up, their dad was a stickler for good behaviour in the house. If they were playing cric…",
      url: "https://www.theguardian.com/sport/2023/apr/04/hampshire-keith-barker-county-championship-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/299400032f73f0fb30dc58b3faa86ac57bfdb134/638_179_1408_845/master/1408.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0ad874f3b1edf4c7a21e223ea8b2d2e1",
      publishedAt: "2023-04-04T12:18:35Z",
      content:
        "When Keith Barker and his older brother Dean were growing up, their dad was a stickler for good behaviour in the house. If they were playing cricket though, it was a different story a smashed ornamen… [+5573 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Robert Kitson",
      title:
        "The Breakdown | Cross-fertilisation: English players going abroad is a progressive move",
      description:
        "Traditionalists will frown but sabbaticals and wildcards could increase skills and talent pool while making for a better gameIt is amazing how swiftly perceptions can change in sport. Remember how English cricket once revolved around the County Championship u…",
      url: "https://www.theguardian.com/sport/2023/mar/28/english-rugby-union-players-going-abroad-progressive",
      urlToImage:
        "https://i.guim.co.uk/img/media/18786325b5865a569dd1a07a99bdd6dafa85ab88/234_257_4650_2790/master/4650.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cb005c6fb681e2912a901d26aefab2aa",
      publishedAt: "2023-03-28T10:58:00Z",
      content:
        "It is amazing how swiftly perceptions can change in sport. Remember how English cricket once revolved around the County Championship until Twenty20 cricket and the Indian Premier League came along? O… [+4920 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Ali Martin",
      title: "Chennai Super Kings line up new signing Ben Stokes for captaincy",
      description:
        "<ul><li>Side invests heavily in all-rounder as potential long-term leader</li><li>England keen to work with CSK to ensure Stokes is fit for Ashes</li></ul>Ben Stokes is being groomed as a possible long-term captain of Chennai Super Kings as he prepares to sta…",
      url: "https://www.theguardian.com/sport/2023/mar/28/chennai-super-kings-line-up-new-signing-ben-stokes-for-captaincy-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/99e7385d7bf6245bf9ac4fc02b5bb30d00f88fef/0_173_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ec3d9862d0f8e7b2cdd1b6777e52db00",
      publishedAt: "2023-03-28T17:30:24Z",
      content:
        "Ben Stokes is being groomed as a possible long-term captain of Chennai Super Kings as he prepares to start the Indian Premier League this year as a specialist batter. The all-rounder heads into the t… [+2719 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "Resignations at Cricket Scotland anti-racism group",
      description:
        "Four people have walked after new Chairman Anjan Luthra claimed progress was being made on racism.",
      url: "https://www.bbc.co.uk/news/uk-scotland-65085394",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/56BE/production/_129160222_haq.jpg",
      publishedAt: "2023-03-27T06:40:37Z",
      content:
        "Four members of Cricket Scotland's Equality and anti-racism working group have resigned over what they see as a lack of progress in tackling racism. \r\nThe four walked out in protest after Chairman An… [+1557 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Tanya Aldred",
      title: "County Championship 2023: team-by-team guide to the new season",
      description:
        "Hampshire have eyes on first title in 50 years but Lancashire have recruited well and champions Surrey will be tough to beatCaptain Tom Westley (Championship and 50-over Cup) Coach: Anthony McGrath Last season: 4th Continue reading...",
      url: "https://www.theguardian.com/sport/blog/2023/apr/05/county-championship-2023-team-by-team-guide-to-the-new-season",
      urlToImage:
        "https://i.guim.co.uk/img/media/60430c2a133c24bfb5578f061e7791510d630a37/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4055a9922b506b02ad74ee1a7c0d04d1",
      publishedAt: "2023-04-05T14:02:27Z",
      content:
        "DIVISION ONEEssex\r\nCaptain Tom Westley (Championship and 50-over Cup) Coach: Anthony McGrath Last season: 4th\r\nAfter winning the County Championship in 2017 and 2019, and the Bob Willis Trophy in 202… [+12975 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title: "Afghanistan wins landmark cricket series against Pakistan",
      description:
        "Afghanistan beat Pakistan by seven wickets in second Twenty20 international and take an unassailable 2-0 lead in series.",
      url: "https://www.aljazeera.com/news/2023/3/27/afghanistan-wins-landmark-cricket-series-against-pakistan",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/03/2021-11-03T210552Z_1358618540_UP1EHB31MLQFE_RTRMADP_3_CRICKET-T20WORLDCUP-IND-AFG.jpg?resize=1920%2C1440",
      publishedAt: "2023-03-27T05:46:25Z",
      content:
        "Afghanistan has displayed another impressive run-chase to beat new-look Pakistan by seven wickets in the second Twenty20 international (T20I) with one ball remaining and take an unassailable 2-0 lead… [+2767 chars]",
    },
    {
      source: { id: null, name: "Sky Sports" },
      author: null,
      title: "Merson: Real could put up a cricket score against Chelsea",
      description:
        "Paul Merson says Chelsea's run of four wins in 21 Premier League matches 'can't happen' with the talent available in the team.",
      url: "https://www.skysports.com/watch/video/sports/football/12852998/paul-merson-real-madrid-could-put-up-a-cricket-score-against-chelsea",
      urlToImage:
        "https://e0.365dm.com/23/04/768x432/skysports-paul-merson-chelsea_6115480.jpg?20230408184301",
      publishedAt: "2023-04-08T16:45:00Z",
      content:
        "Please use Chrome browser for a more accessible video player\r\nPaul Merson says Chelsea's run of four wins in 21 Premier League matches 'can't happen' with the talent available in the team.",
    },
  ];
  constructor(props) {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey--Top HeadLines</h2>
        <div className="row">
          {this.state.articles.map((e) => {
            return <div className="col-md-3"     
            key={e.url}>
              <NewItem
                title={e.title.slice(0, 45)}
                description={e.description.slice(0, 88)}
                imageUrl={e.urlToImage}
                newsUrl={e.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
