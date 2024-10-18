import X from "../assets/icons/x.svg";
import In from "../assets/icons/in.svg";

const SocialButtons = ({ tweetUrl, linkedInUrl }) => (
  <aside id="container-rrss">
    <a 
      id="tweet-quote" 
      title="Tweet on X"
      aria-label="Tweet this quote"
      className="tweet-quote tweet-quote-res" 
      rel="noreferrer noopener"
      target="_blank" 
      href={tweetUrl} 
    >
      <img src={X} alt="X" className="icons" />
    </a>
    <a 
      id="linkedIn-quote" 
      title="Share on LinkedIn"
      aria-label="Share on LinkedIn"
      className="tweet-quote tweet-quote-res" 
      rel="noreferrer noopener"
      target="_blank" 
      href={linkedInUrl} 
    >
      <img src={In} alt="In" className="icons" />
    </a>
  </aside>
);

export default SocialButtons;