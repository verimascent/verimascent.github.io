import React from 'react';
import { ComponentWrapper } from './QuotesCard.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import ContentLoader from 'react-content-loader'
 
interface Props {
    author: string;
    quote: string;
    callback: React.MouseEventHandler;
    colors: string[][];
    isLoading: boolean;
    fade: boolean;
}

const QuotesCard: React.FunctionComponent<Props> = ({
    author,
    quote,
    callback,
    colors,
    isLoading,
    fade,
}) => {
    
const MyLoader = () => (
    <>
        <div id="author"></div>
        <ContentLoader backgroundColor="rgba(145, 145, 145, 0.2)" foregroundColor="rgba(255, 255, 255, 0.2)">
            <rect x="0" y="5" rx="4" ry="4" width="40vw" height="13" />
            <rect x="0" y="25" rx="4" ry="4" width="40vw" height="13" />
            <rect x="0" y="45" rx="4" ry="4" width="40vw" height="13" />
            <rect x="0" y="65" rx="4" ry="4" width="40vw" height="13" />
            <rect x="0" y="85" rx="4" ry="4" width="40vw" height="13" />
            <rect x="0" y="105" rx="4" ry="4" width="40vw" height="13" />
            <rect x="0" y="125" rx="4" ry="4" width="40vw" height="13" />
        </ContentLoader>
    </>
  );
    return (
        <>
            <ComponentWrapper col={colors} fade={fade} >
                <div id="background">
                    <div id="quote-box">
                        {!isLoading && (
                            <>
                            <div id="text">{quote}</div>
                            <div id="author">- {author}</div>
                            </>
                        )}
                        {isLoading && (
                            <MyLoader />
                            
                        )}
                    
                        <div className="button-box">
                            <div className="twitter">
                                <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                            <button id="new-quote" onClick={callback}>New Quote</button>
                        </div>
                    </div>
                    
                </div>
            </ComponentWrapper>
        </>
    )}

export default QuotesCard;