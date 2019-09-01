import styled from 'styled-components';
import logoPic from '../../static/logo.png';
export const HeaderWrapper=styled.div`
    height:56px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
`
export const Logo=styled.span`
    width:100px;
    height:56px;
    position:absolute;
    top:0;
    left:0;
    display:block;
    background:url(${logoPic});
    background-size:contain;
`
export const Nav=styled.div`
   width:960px;
   padding-right:70px;
   height:100%;
   margin:0 auto;
   box-sizing:border-box;
`
export const NavItem=styled.div`
    padding:0 15px;
    font-size:17px;
    line-height:56px;
   &.left{
       float:left;
   }
   &.right{
       float:right
   }
   &.active{
    color:red
}
`
export const SearchWrap=styled.div`
    float:left;
    position:relative;
    .zoom{
        position:absolute;
        right:5px;
        bottom:25px;
        width:30px;
        height:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:gray;
        }
    }
`
export const HotSearch=styled.div`
    position:absolute;
    margin-top: 9px;
    width: 250px;
    left: 0;
    top: 47px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 4px;
    font-size:12px;
`
export const SearchTitle=styled.span`
    position:absolute;
    font-size:14px;
    top:9px;
    &.titleLeft{
        left:9px
    }
    &.titleRight{
        right:9px;
        .spin{
            display:block;
            float:left;
            font-size:12px;
            margin-right:14px;
            transition:all .2s ease-in;
        }
    }
    
`
export const SearchItem=styled.a`
    float:left;
    margin: 0 10px 10px 10px;
    display: inline-block;
    line-height: 12px;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
`
export const SearchItemWrap=styled.div`
    margin-top: 30px;
`

export const Input=styled.input.attrs({
    placeholder:'搜索'
})`
   width:160px;
   height:38px;
   border:none;
   outline:none;
   background:#eee;
   border-radius:19px;
   padding:0 38px 0 15px;
   margin-top:9px;
   font-size:14px;
   box-sizing:border-box;/* 不让padding撑开40px */
   &::placeholder{
       color:#999;
   }
   transition:all 0.5s ease-out;
   &.focused{
       width:260px;
   }
`
export const Addition=styled.div`
   position:absolute;
   right:0;
   top:0;
   height:56px;
`
export const Button=styled.div`
   float:right;
   line-height:38px;
   padding:0 20px;
   border-radius:19px;
   border:1px solid #ec6149;
   margin-top:9px;
   margin-right:20px;
   &.reg{
       color:#ec6149
   }
   &.writting{
    background:#ec6149;
    color:white;
}
`