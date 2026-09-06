import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function TranslationDemo() {
const { t, i18n } = useTranslation()
const [language, setLanguage] = useState('en')

const changeLanguage = () => {
const newLanguage = language === 'en' ? 'es' : 'en'

i18n.changeLanguage(newLanguage)
setLanguage(newLanguage)
}

return (
<div className="flex flex-col items-center gap-4 text-center">
    <h1 className="text-3xl font-bold text-gray-800">
    {t('welcome')}
    </h1>

    <p className="text-gray-600">
    {t('description')}
    </p>

    <button
    onClick={changeLanguage}
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
    {t('switchLanguage')}
    </button>
</div>
)
}

export default TranslationDemo