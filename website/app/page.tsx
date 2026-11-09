
export default function Home() {
  return (
    <main>
      <header className="wrap nav">
        <a href="#" className="brand">
          <span className="gold">◉</span>
          DOLLARSPLAY
        </a>

        <nav>
          <a href="#features">Features</a>
          {" "}
          <a href="#how">How It Works</a>
          {" "}
          <a href="#join" className="btn">
            Get Started
          </a>
        </nav>
      </header>

      <section className="wrap hero">
        <div>
          <span className="eyebrow">
            WELCOME TO DOLLARSPLAY
          </span>

          <h1>
            PLAY MORE.
            <br />
            <span>ACHIEVE MORE.</span>
          </h1>

          <p className="lead">
            Explore exciting games, complete tasks,
            build your referral network and discover
            a new rewards experience.
          </p>

          <div className="hero-buttons">
            <a href="#join" className="btn">
              Explore DollarsPlay
            </a>

            <a href="#features" className="btn btn-ghost">
              Discover Features
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="coin">DP</div>
        </div>
      </section>

      <section className="wrap stats">
        <div>
          <strong>GAMES</strong>
          <span>Play and explore</span>
        </div>
        <div>
          <strong>TASKS</strong>
          <span>Complete activities</span>
        </div>
        <div>
          <strong>REFERRALS</strong>
          <span>Build your network</span>
        </div>
        <div>
          <strong>REWARDS</strong>
          <span>Explore opportunities</span>
        </div>
      </section>

      <section className="section wrap" id="features">
        <div className="section-head">
          <span className="eyebrow">OUR PLATFORM</span>
          <h2>Everything in One Place</h2>
          <p>
            Discover the features that make
            DollarsPlay an engaging platform.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature">
            <div className="icon-box">🎮</div>
            <h3>Games</h3>
            <p>
              Explore entertaining games
              and challenges.
            </p>
          </article>

          <article className="feature">
            <div className="icon-box">🎯</div>
            <h3>Tasks</h3>
            <p>
              Complete available tasks
              and track your progress.
            </p>
          </article>

          <article className="feature">
            <div className="icon-box">👥</div>
            <h3>Referrals</h3>
            <p>
              Invite members and grow
              your referral network.
            </p>
          </article>

          <article className="feature">
            <div className="icon-box">💰</div>
            <h3>Wallet</h3>
            <p>
              Manage your platform
              rewards and transactions.
            </p>
          </article>
        </div>
      </section>

      <section className="section how" id="how">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">GETTING STARTED</span>
            <h2>How DollarsPlay Works</h2>
          </div>

          <div className="steps">
            <article className="step">
              <span>01</span>
              <h3>Create Your Account</h3>
              <p>
                Register and complete
                your member profile.
              </p>
            </article>

            <article className="step">
              <span>02</span>
              <h3>Explore the Platform</h3>
              <p>
                Discover games, tasks
                and referral opportunities.
              </p>
            </article>

            <article className="step">
              <span>03</span>
              <h3>Track Your Progress</h3>
              <p>
                Manage your wallet
                and platform activities.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="wrap join" id="join">
        <div className="join-panel">
          <span className="eyebrow">YOUR JOURNEY STARTS HERE</span>
          <h2>Welcome to DollarsPlay</h2>
          <p>
            A world of games, activities
            and community awaits.
          </p>
          <a href="#features" className="btn">
            Explore Now
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="brand">
            <span className="gold">◉</span>
            DOLLARSPLAY
          </div>
          <p>
            © 2026 DollarsPlay. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
                                       }
      
