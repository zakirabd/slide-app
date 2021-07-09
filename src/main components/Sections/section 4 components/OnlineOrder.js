import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStateMain, insertOnlineOrder, resetStateMain } from '../../../actions/MainActions';

export class OnlineOrder extends Component {
    inputOnlineOrder (e) {
        this.props.changeStateMain({
            name:"onlineOrder."+ e.target.name,
            value: e.target.value
        })
    }
    returnAnswer(){
        setTimeout(()=>{
            this.props.changeStateMain({
                name:"onlineSuccess",
                value: false
            })
            this.props.changeStateMain({
                name:"onlineEmpty",
                value: false
            })
            this.props.changeStateMain({
                name:"onlineError",
                value: false
            })
            
        }, 3000)
        
    }

    sendOnlineOrder  = (onlineOrder, e) => {
        if(onlineOrder.topic !=='' && onlineOrder.page !== '' && onlineOrder.number){
            this.props.changeStateMain({
                name: "sendingLoader",
                value: true
            })
            this.props.insertOnlineOrder(onlineOrder)
            .then(resp =>{
                if(resp.status === 'success'){
                    this.props.changeStateMain({
                        name:"onlineSuccess",
                        value: true
                    })
                    this.props.changeStateMain({
                        name: "sendingLoader",
                        value: false
                    })
                }else {
                    this.props.changeStateMain({
                        name:"onlineError",
                        value: true
                    })
                    this.props.changeStateMain({
                        name: "sendingLoader",
                        value: false
                    })
                }
            })
        }else{
            this.props.changeStateMain({
                name:"onlineEmpty",
                value: true
            })
        }
        this.returnAnswer()
    }
  
    render() {
        const {changeLang, onlineOrder, onlineSuccess,onlineEmpty, onlineError, sendingLoader} = this.props;
        return (
            <div className="online-order">
                <h2 className="online-order-header">{changeLang.onlineOrderHeader}</h2>
                <div className="online-order-input">
                    <div>
                        <form >
                        <label className="topic-name-label" id="input-1" htmlFor="topic">{changeLang.topicLabel}</label>
                        <input 
                            type="text" 
                            id="topic" 
                            name="topic"
                            value={onlineOrder.topic}
                            onChange={this.inputOnlineOrder.bind(this)} 
                            required placeholder={changeLang.topicPlaceHolder} 
                        /> 

                        <label className="topic-name-label" id="input-2" htmlFor="number_of_page">{changeLang.pageCountlabel}</label>
                        <input 
                            type="number" 
                            id="number_of_page" 
                            name="page"
                            value={onlineOrder.page}
                            onChange={this.inputOnlineOrder.bind(this)} 
                            required placeholder={changeLang.pageCountPlaceHolder} 
                        /> 

                        <label className="topic-name-label" id="input-3" htmlFor="number">{changeLang.contactLabel}</label>
                        <input 
                            type="tel" 
                            id="number" 
                            name="number"
                            value={onlineOrder.number}
                            onChange={this.inputOnlineOrder.bind(this)} 
                            // pattern="+[0-9]{3} [0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}"
                            required placeholder="+994 XX XXX XX XX" 
                        /> 
                        <button type="button" onClick={this.sendOnlineOrder.bind(this, onlineOrder)} className="send-order-btn">{changeLang.sendButton}</button>
                        {
                            sendingLoader ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> :
                            onlineSuccess ? <p className="online-success">{changeLang.orderSuccessMsg}</p> :
                            onlineEmpty ? <p className="online-empty">{changeLang.orderEmptyMsg}</p> :
                            onlineError ? <p className="online-error">{changeLang.orderErrorMsg}</p> : null
                        }
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    changeLang: state.Data.changeLang,
    onlineOrder: state.Data.onlineOrder,
    onlineSuccess: state.Data.onlineSuccess,
    onlineEmpty: state.Data.onlineEmpty,
    onlineError: state.Data.onlineError,
    sendingLoader: state.Data.sendingLoader
})
const mapDispatchToProps = {
    changeStateMain, insertOnlineOrder, resetStateMain
}
export default connect(mapStateToProps, mapDispatchToProps)(OnlineOrder)
