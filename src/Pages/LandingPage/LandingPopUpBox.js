//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 08 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - LandingPopUpBox 
//    DESCRIPTION - LandingPopUpBox Component
//////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};



export default function LandingPopUpBox(props) {

    const [newsidcontent, setNewsIdcontent] = useState()
    const [newsrunningId, setNewsRunningId] = useState()
    const [eventIdContent, setEventIdContent] = useState()
    const [eventRunningId, setEventRunningId] = useState()
    const [annIdContent, setannIdContent] = useState()
    const [annRunningId, setannRunningId] = useState()
    const [funIdContent, setFunIdContent] = useState()
    const [funRunningId, setFunRunningId] = useState()


    useEffect(() => {

        setNewsRunningId(props.news_id)
        setEventRunningId(props.event_id)
        setannRunningId(props.ann_id)
        setFunRunningId(props.fun_id)

    }, [newsrunningId, eventRunningId, annRunningId, funRunningId])

    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        axios.get(`http://localhost:3333/news/${newsrunningId}`)
            .then(function (response) {
                console.log('news data ', response);
                setNewsIdcontent(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get(`http://localhost:3333/event/${eventRunningId}`)
            .then(function (response) {
                console.log('events data ', response);
                setEventIdContent(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get(`http://localhost:3333/announcement/${annRunningId}`)
            .then(function (response) {
                console.log('annoucement data ', response);
                setannIdContent(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get(`http://localhost:3333/function/${funRunningId}`)
            .then(function (response) {
                console.log('annoucement data ', response);
                setFunIdContent(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })

        setOpen(true);
    };


    const handleClose = () => {
        setOpen(false);
    };



    return (
        <>

            <div>
                <Button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-cyan-600" variant="outlined" onClick={(handleClickOpen)}>
                    Click here
                </Button>

                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >

                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} class='justify-right '>
                        <h1 class="text-3xl text-red-500 bg-sky-200">
                            {newsidcontent?.header}
                            {eventIdContent?.header}
                            {annIdContent?.header}
                            {funIdContent?.header}
                        </h1>

                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom >
                        {/* <div dangerouslySetInnerHTML={{__html: body}} />     */}
                            {newsidcontent?.body}
                            {eventIdContent?.body}
                            {annIdContent?.body}
                            {funIdContent?.body}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Typography gutterBottom >
                            {newsidcontent?.date}
                            {eventIdContent?.date}
                            {annIdContent?.date}
                            {funIdContent?.date}
                        </Typography>
                    </DialogActions>
                </BootstrapDialog>

            </div>
        </>
    );
}
/**
 * Exported to :
 * 1. LandingAnnounceBoard
 * 2. LandingNewsBoard
 * 
 * 
 */