import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from './shared/Spinner'
import Card from "./shared/Card";
import iloveu from '../images/download.png'

function FeedbackList() {
  return ( <div className="feedback-list">
  <AnimatePresence>
  <>
        <Card >
            Chúc mừng sinh nhật bà nhé. Chúc bà sang tuổi mới đạt được những điều bà muốn nề.
            Bớt quạu với tui lại nề.
        </Card>
        <Card >
           <p>Bà là động lực lớn nhất của tui để tui cố gắng đó Linh à.</p>
           <p>Vẫn biết sẽ có những khó khăn phía trước, nhưng vì bà mà tui luôn cố gắng từng ngày.</p>
           <p>Tui trân trọng từng ngày có bà &#10084;&#10084;&#10084;</p>
        </Card>
        <Card >
            <p>Đây là năm đầu tiên sinh tui được chúc mừng sinh nhật bà,</p>
            <p>Tui mong sinh nhật bà nhiều năm sau nữa..., tui vẫn được ở bên cạnh bà nha.&#129299;	</p>
        </Card>
        <Card >
            <p>Và quan trọng nhất là... đừng bao giờ "nghỉ chơi" với tui đáy ngăn &#129299;</p>
            <p>Thương bà nhiều &#128536;</p>
            <p><b>There is only you in my heart.</b></p>
            <p><b>I love you so much.</b></p>
        </Card>
        
        
        </>
  </AnimatePresence>
</div>)
}

export default FeedbackList;
