import React from "react";
import {SocialMediaDiv , Social , Icon , SocialDesc , Span , SpanInfo} from  './style';
import axios from "axios";


class SocailMedia extends React.Component {
   state =  {
      social : [] 
   }

  componentDidMount() {
     axios.get('js/data.json').then( res => { this.setState({ social : res.data.social })  } )
  }

   render () {
      const {social} = this.state 
      const socialList =  social.map( (socialItem) => {
          return (
            <Social item = {socialItem.id} key={socialItem.id}>
            <Icon className={socialItem.icon}></Icon>
            <SocialDesc>
               <Span>{socialItem.title}</Span>
               <SpanInfo >{socialItem.body}</SpanInfo> 
            </SocialDesc>
            </Social>
          )
      })
      return (
         <SocialMediaDiv>
            {socialList}
         </SocialMediaDiv>
      )
   }
} 

export default SocailMedia ;