/* eslint-disable jsx-a11y/anchor-is-valid */
function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header id="header">
              <a href="/" className="logo"><strong>Prompt</strong> Hub</a>
            </header>

            <section id="banner">
              <div className="content">
                <header>
                  <h1>Prompt Hub</h1>
                  <p>자유롭게 프롬프트를 공유하자!</p>
                </header>
                <p>
                  ChatGPT 같은 ‘생성형 인공지능’(generative AI) 기술을 활용한
                  서비스 대중화가 눈앞에 다가오면서 새롭게 떠오르는 직업이 있다.
                  인공지능이 역량을 120% 발휘할 수 있도록 적합한 지시어를 내려주는
                  직업을 일컫는 ‘프롬프트 엔지니어’다. 여기는 그러한 프롬프트
                  엔지니어를 위한 오픈 프롬프트 환경이다.
                </p>
                <ul className="actions">
                  <li><a href="#" className="button big">REPOSITORY</a></li>
                </ul>
              </div>
              <span className="image object">
              </span>
            </section>

            <section>
              <header className="major">
                <h2>News</h2>
              </header>
              <div className="posts">
                <article>
                  <h3>Interdum aenean</h3>
                  <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                    dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                    lorem feugiat tempus aliquam.
                  </p>
                  <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                  </ul>
                </article>
                <article>
                  <h3>Nulla amet dolore</h3>
                  <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                    dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                    lorem feugiat tempus aliquam.
                  </p>
                  <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                  </ul>
                </article>
                <article>
                  <h3>Tempus ullamcorper</h3>
                  <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                    dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                    lorem feugiat tempus aliquam.
                  </p>
                  <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                  </ul>
                </article>
                <article>
                  <h3>Sed etiam facilis</h3>
                  <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                    dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                    lorem feugiat tempus aliquam.
                  </p>
                  <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                  </ul>
                </article>
                <article>
                  <h3>Feugiat lorem aenean</h3>
                  <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                    dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                    lorem feugiat tempus aliquam.
                  </p>
                  <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                  </ul>
                </article>
                <article>
                  <h3>Amet varius aliquam</h3>
                  <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                    dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                    lorem feugiat tempus aliquam.
                  </p>
                  <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                  </ul>
                </article>
              </div>
            </section>
          </div>
        </div>

        {/* sidebar 뒤에 className="inactive" 붙이면 전체 화면 */}
        <div id="sidebar">
          <div className="inner">
            <section id="search" className="alt">
              <form method="post" action="#">
                <input type="text" name="query" id="query" placeholder="Search" />
              </form>
            </section>

            <nav id="menu">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Repository</a></li>
                <li><a href="#">News</a></li>
                <li>
                  <span className="opener">MarketPlace</span>
                  <ul>
                    <li><a href="#">Prompt</a></li>
                    <li><a href="#">Plugins</a></li>
                    <li><a href="#">NFT</a></li>
                  </ul>
                  <span className="opener active">MarketPlace</span>
                  <ul>
                    <li><a href="#">Prompt</a></li>
                    <li><a href="#">Plugins</a></li>
                    <li><a href="#">NFT</a></li>
                  </ul>
                </li>
              </ul>
            </nav>

            <section>
              <header className="major">
                <h2>Suggest Prompt</h2>
              </header>
              <div className="mini-posts">
                <article>
                  <a>What would be the perfect food for me to eat right now?</a>
                </article>
                <article>
                  <a>당신의 현재 상황에 맞는 투자법은?</a>
                </article>
                <article>
                  <a>현재 개발팀의 필요한 프로세스는?</a>
                </article>
              </div>
            </section>

            <section>
              <header className="major">
                <h2>Contract</h2>
              </header>
              <p>추후 커뮤니케이션 오픈 예정</p>
              <ul className="contact">
                <li className="icon solid fa-envelope">
                  <a href="#">dev@dev.com</a>
                </li>
                <li className="icon solid fa-phone">(010) 1234-5678</li>
                <li className="icon solid fa-home">구로구 디지털로31길 12</li>
              </ul>
            </section>

            <footer id="footer">
              <p className="copyright">2023 Jary All rights reserved.</p>
            </footer>
          </div>
          <span style={{color: '#f56a6a', cursor: 'pointer'}} className="toggle">Toggle</span>
        </div>
      </div>

      <div className="floating-button">
        <a href="" className="btn">Help</a>
      </div>
    </div>
  );
}

export default App;
