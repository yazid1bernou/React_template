import React  , {Component} from "react" ;
import {WorkSection , WorkTitle , Span , WorkPark , Icon , PartTitle , Line , PartDesc} from './style';
import axios from 'axios';


class  Work  extends Component   {
     
    
        state ={
            works : []
        }

        componentDidMount() {
         axios.get('js/data.json').then( res => {this.setState({works : res.data.works})})
        }
        
        render () {

          const {works} = this.state ;
          const workslist =  works.map ( (workItem) => {
              return (
                <WorkPark first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line />
                    <PartDesc>
                    {workItem.body}
                    </PartDesc>
                </WorkPark>
              )
          })


        return (
     
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                  
                    {workslist}
                    
                  
                    
                </div>
            </WorkSection>
           )
       }
}

export default Work ;