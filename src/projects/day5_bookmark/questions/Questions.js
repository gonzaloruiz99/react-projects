import React,{useState} from 'react'
import Question from './Question'

const questionsData = [
    {
        id: 1,
        title:'What is Bookmark?',
        text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
    },
    {
        id: 2,
        title:'How can I request a new browser?',
        text:`Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,
    },
    {
        id: 3,
        title:'Is there a mobile app?',
        text:`Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
        sollicitudin ex et ultricies bibendum.`,
    },
    {
        id: 4,
        title:'What about other Chromium browsers?',
        text:`Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
        vitae neque eget nisl gravida pellentesque non ut velit.`,
    },
]

const Questions = () => {
    
    

    return (
        <section className="questions-container">
            <h2>frequently asked questions</h2>
            <p>Here are some of our FAQs. If you have any other questions you’d like 
            answered please feel free to email us.</p>
            <div className="questions">
                {
                    questionsData.map((question)=>{

                        return <Question key={question.id} {...question} ></Question>
                    })
                }
            </div>
            <button className="btn">More info</button>
        </section>
    )
}

export default Questions
