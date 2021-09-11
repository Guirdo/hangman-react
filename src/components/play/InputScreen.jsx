import { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap"
import { Context } from '../../reducer/Context'
import { LetterForm } from "./LetterForm";
import { LetterScreen } from "./LetterScreen";
import { ResetButton } from "./ResetButton";
import { WrongLetters } from "./WrongLetters";

export const InputScreen = () => {
    const { game: { wrongLetters, rightLetters } } = useContext(Context)

    const [hasFinished, setHasFinished] = useState(false)
    const [hasWon, setHasWon] = useState(false)

    useEffect(() => {
        const rl = rightLetters.filter(le => le.match(/[A-Za-z]/))
        const wl = wrongLetters.filter(le => le.match(/[A-Za-z]/))

        if (!rl.find( le => (le === le.toLowerCase() ) )) {
            alert('You won! :D')
            setHasWon(true)
            setHasFinished(true)
        } else if (wl.length === 7) {
            alert('You lose! :(')
            setHasFinished(true)
        }
    }, [rightLetters, wrongLetters])

    return (
        <Col className="p-3">

            <Row className="justify-content-center my-4">
                {
                    rightLetters.map((le, i) => (
                        <LetterScreen
                            key={`${le}-${i}`}
                            letter={le}
                        />
                    ))
                }
            </Row>

            {
                hasFinished
                    ? (
                        <ResetButton
                            hasWon={hasWon}
                        />
                    )
                    : (
                        <>
                            <LetterForm />
                            <WrongLetters />
                        </>
                    )
            }


        </Col>
    )
}
