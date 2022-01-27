import React from 'react'
import Chart from './Chart'
import './Skills.css'


const Skills = () => {
    return (
        <div id="skills">
            <div id="div"></div>
        <h1 className="headT">Skills</h1>
        <br/>
        <div id="skill">
           <div className="elem"><Chart 
                captions={{s1: 'JavaScript',s2: 'Java',s3: 'ReactJS',s4: 'SQL',s5: 'MongoDB',s6: 'Socket.io',s7: 'AWS',s8: 'Neo4j',s9: 'Cypher',s10: 'NodeJS',}} 
                data ={[{data: {s1: 0.9,s2: 0.9,s3: 0.8,s4: 0.8,s5: 0.55,s6: 0.7,s7: 0.4,s8: 0.6,s9: 0.8,s10: 0.9,},
                        meta: { color: 'green', className: 'radar' }}]} 
                /></div>
           <div className="elem"><Chart
                captions={{ s1: 'DSA',s2: 'Maths', s3: 'OS/DBMS',s4: 'HLD',s5: 'LLD'}} 
                data ={[{data: {s1: 0.9,s2: 0.85,s3: 0.7,s4: 0.5,s5: 0.8},
                      meta: { color: 'blue'}},]} 
            /></div>
           <div className="elem"><Chart 
                captions={{
                    s1: 'Augmented Reality',
                    s2: 'Blockchain',
                    s3: 'AI',
                    s4: 'Paintings',
                    s5: 'Puzzle Solving',
                    s6: 'Chess',
                    s7: 'Reading'
                  }} 
                data ={[
                    {
                      data: {
                        s1: 0.9,
                        s2: 0.7,
                        s3: 0.85,
                        s4: 0.95,
                        s5: 0.8,
                        s6: 0.8,
                        s7: 0.7
                      },
                      meta: { color: 'orange'}
                    },
                  ]} 
           /></div>
        </div>
        </div>
    )
}

export default Skills
