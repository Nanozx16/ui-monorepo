import { defaultLocale } from 'app/i18n'
import { redirect } from 'next/navigation'

export default function RootPage() {
  redirect(`/${defaultLocale}/bridge`)
}
