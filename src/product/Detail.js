import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {CSSTransition} from "react-transition-group";
import { connect } from 'react-redux';




function Detail(){

let { id } = useParams();    

    return(
        <div>
         상세페이지
        </div>
    )
}

export default Detail;