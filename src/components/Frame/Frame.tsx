import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame.module.css';

interface Props {
  className?: string;
}
/* @figmaId 6:489 */
export const Frame: FC<Props> = memo(function Frame(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.group}></div>
      <div className={classes.group2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.image1}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.rectangle6}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.skipToMainContent}>Skip to main content</div>
      <div className={classes.rectangle11}></div>
      <div className={classes.tryItOut}>Try it out</div>
      <div className={classes.rectangle12}></div>
      <div className={classes.tryItOut2}>Try it out</div>
      <div className={classes.rectangle13}></div>
      <div className={classes.source}>Source</div>
      <div className={classes.sUCITTECH}>SUCIT TECH</div>
      <div className={classes.SoSucitAITheNextGenerationOfAI}>
        [so]sucit AI, The Next Generation of AI Chatbot now available on Discord.
      </div>
      <div className={classes.theGoogleBardPoweredAIChatbotI}>
        The Google Bard powered AI Chatbot is out and it’s here to stay.
      </div>
      <div className={classes.sUCITSPORTS}>SUCIT SPORTS</div>
      <div className={classes.indonesiaAimsToStunWorldChampi}>Indonesia Aims to Stun World Champions Argentina</div>
      <div className={classes.sUCITGAMING}>SUCIT GAMING</div>
      <div className={classes._3MostAnticipatedGamesOf2023}>3 most anticipated games of 2023</div>
      <div className={classes.sUCITHARDWARE}>SUCIT HARDWARE</div>
      <div className={classes.hotwavCyberXIsNotWorthThePrice}>Hotwav Cyber X is not worth the price</div>
      <div className={classes.SoSucitAI}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>[</span>
          <span className={classes.label2}>so</span>
          <span className={classes.label3}>]</span>
          <span className={classes.label4}>sucit</span>
          <span className={classes.label5}>AI</span>
        </p>
      </div>
      <div className={classes.babi}>babi</div>
      <div className={classes.image4}></div>
      <div className={classes.image5}></div>
      <div className={classes.image6}></div>
    </div>
  );
});
