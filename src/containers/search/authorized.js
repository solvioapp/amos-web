import AmosChat from 'components/amos-chat'
import React from 'react'

const messages = [
  `Hi again.`,
  `Psst Psst 🤫 The guys from Solvio said they'll teach me search when we have 10,000 "data points". And if we can't get there they'll get rid of me! 😱 They call this "iteration".. 😳`,
  `So I'm in desperate need of your help! Go ahead and submit reviews for your favorite learning resources.`,
  // `Oh and introduce me to your friends. My address is www.amos.ms... Let's keep this product alive 😉`,
]

const Authorized = () => (
  <AmosChat>{messages}</AmosChat>
)

export default Authorized
