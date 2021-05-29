import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '95%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};   
`;

export const CloseIcon = styled(FaTimes)`
    color:#fff;

    &:hover {
        color: #15cdfc;
        transition: 0.2s ease-in-out;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div `
    color: #fff;
`;

export const SidebarMenu = styled.ul `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 60px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkR)`
    display: flex;
    alig-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none; 
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    
    &:hover {
        color: #15cdfc;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebtnWrap = styled.div `
    display: flex;
    justify-content: center; 
`;

export const SidebarRoute = styled(LinkR) `
    border-radius: 10px;
    background: #15cdfc;
    white-spcae: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;
    

    &:hover { 
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #15cdfc;
    }
`;
