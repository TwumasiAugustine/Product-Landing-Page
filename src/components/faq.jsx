import React, {useState} from 'react';
import SideImage from '../assets/gropwach.jpeg';
import Faq from '../data/faq.json'
import 'animate.css';
import '../style/faq.css'

function FrequentAskQuestion() {
    const [expandedItems, setExpandedItems] = useState(Array(Faq.length).fill(false));

    const toggleItem = (index) => {
        const newExpandedItems = [...expandedItems];
        newExpandedItems[index] = !newExpandedItems[index];
        setExpandedItems(newExpandedItems);
    }

    return(
        <section className='faq'>
            <h2>Frequently Asked Questions</h2>
            <div className='container'>
                <React.Fragment>
                <div className='faq-container'>
                    <div className='accordion-container'>
                        {Faq.map((item, index) => (
                            <div className='accordion' key={item.id}>
                                <div className='accordion-item'>
                                    <div className='accordion-title' onClick={() => toggleItem(index)}>
                                        {item.question}
                                        <div>{expandedItems[index] ? '-' : '+'}</div>
                                    </div>
                                    {expandedItems[index] && <div className='accordion-content'>
                                        {item.answer}
                                    </div>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </React.Fragment>
                <div className='sideImgContainer'>
                    <img src={SideImage} alt='image'/>
                </div> 
            </div>
        </section>
    )
}

export default FrequentAskQuestion;