'use client'

import { Card, CardContent, CardHeader, CardFooter } from "../ui/card"
import AuthHeader from "./auth-header"
import BackButton from "./back-button"

interface CardWrapperProps {
  label: string
  title: string
  backButtonHref: string
  backButtonLabel: string
  children: React.ReactNode
}

const CardWrapper = ({label, title, backButtonHref, backButtonLabel, children} : CardWrapperProps) => {
  return (
    <Card className="xl:w-1/4 md:w-1/2 shadow-md">
      <CardHeader >
        <AuthHeader label={label} title={title}>

        </AuthHeader>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref}>

        </BackButton>
      </CardFooter>
    </Card>
  )
}

export default CardWrapper