'use client'

import { PagePath } from '@/constants'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ResetPasswordForm from './components/resetPasswordForm'
import { ResetPasswordFormProps } from './components/type'

export default function CardWithForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectToSignIn = () => {
    router.replace(PagePath.LOG_IN)
  }
  const [resetCredential, setResetCredential] = useState<ResetPasswordFormProps>({
    email: '',
    recoverToken: ''
  })
  useEffect(() => {
    const email = searchParams.get('email')
    const recoverToken = searchParams.get('recoverToken')
    if (!email || !recoverToken) {
      redirectToSignIn()
    } else {
      setResetCredential({ email, recoverToken })
    }
  }, [searchParams])

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>Set new password</h1>
          <p className='text-sm text-muted-foreground'>
            Enter your new password below to set the new password
          </p>
        </div>
        <ResetPasswordForm
          email={resetCredential.email}
          recoverToken={resetCredential.recoverToken}
        />
      </div>
    </div>
  )
}
