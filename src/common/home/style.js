import styled from 'styled-components';
export const HomeWrapper=styled.div`
   width:960px;
   margin:0 auto;
   overflow:hidden;
`
export const LeftWrapper=styled.div`
   width:625px;
   float:left;
`
export const RightWrapper=styled.div`
   width:280px;
   float:right;
`
export const BannerWrapper=styled.div`
   width:100%;
   height:270px;
   img{
      width:100%
   }
`
export const TopicWraper=styled.div`
   width:100%;
   word-wrap: break-word;
`

export const TopicItem=styled.div`
   width:100%;
   min-height:130px;
   border-bottom: 1px solid #f0f0f0;
   padding: 15px 2px 20px 0;
   .topic-pic{
      width:150px;
      float:right;
   }
`
export const TopicBox=styled.div`
   width:450px;
   float:left;
   margin: 0 0 18px;
   font-size: 13px;
   line-height: 24px;
   color: #999;
   h3{
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
   }
`
export const LoadMore=styled.div`
   width:625px;
   heigth:40px;
   background:gray;
   border-radius:20px;
   line-height:40px;
   color:#fff;
   text-align:center;
   margin-top: 10px;
   clear: both;
`
export const Top=styled.div`
  position:fixed;
  bottom:100px;
  right:100px;
  width:100px;
  height:100px;
  text-align:center;
  line-height:100px;
  border:1px solid gray;
  border-radius:4px;
  font-size:16px;
`
export const RecomendWraper=styled.div`
   width:280px;
   overflow:hidden;
   ul{
      width:100%;
      li{
         width:100%;
         height:50px;
         margin-bottom:5px;
         img{
            width:100%;
         }
      }
   }
`