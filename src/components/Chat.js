import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase";

const Chat = React.memo( () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    const [scrollStatus, setScrollStatus] = useState('initial')

    const bottomAnchor = useRef(null)

    const sendMessage = async (e) => {
        e.preventDefault()
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }
    const onScroll = e => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight-element.scrollTop) - element.clientHeight) > 20){
            scrollStatus !== 'manual' && setScrollStatus('manual')
        } else{
            scrollStatus === ('manual') && setScrollStatus('auto')
        }
    }
    useEffect(() => {
        if (bottomAnchor.current && scrollStatus === 'initial'){
            bottomAnchor.current.scrollIntoView()
            setScrollStatus('auto')
        }
        if (scrollStatus === 'auto'){
            bottomAnchor.current?.scrollIntoView({behavior:"smooth"})
        }
        return () => {
            setScrollStatus('initial')
        }
    },[messages])



    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50, paddingTop: 20}}
                  justify={'center'}
            >
                <div onScroll={onScroll} style={{width: '80%', height: '70%', border: '1px solid black', overflowY: 'auto'}}>
                    {messages.map(message =>
                        <div key={message.createdAt}
                             style={{
                                 margin: 10,
                                 border: user.uid === message.uid ? '1px solid green' : '1px solid red',
                                 marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                 width: 'fit-content',
                                 padding:5
                             }}>
                            <Grid container

                            >
                                <Avatar src={message.photoURL}/>
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>)}
                    <div ref={bottomAnchor}/>
                </div>
                <Grid container
                      direction={'column'}
                      alignItems={"flex-end"}
                      style={{width: '80%'}}
                >
                    <TextField variant={'outlined'}
                               fullWidth
                               rowsMax={2}
                               value={value}
                               onChange={e => setValue(e.currentTarget.value)}
                    />
                    <Button onClick={sendMessage} variant={"outlined"}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    );
});

export default Chat;