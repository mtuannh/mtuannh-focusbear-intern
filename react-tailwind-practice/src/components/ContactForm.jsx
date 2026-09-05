import { useFormik } from 'formik'
import * as Yup from 'yup'

function ContactForm() {
    const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
    },

    validationSchema: Yup.object({
        name: Yup.string()
        .required('Name is required'),

        email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),

    onSubmit: (values) => {
        console.log('Form submitted:', values)
        alert(`Form submitted for ${values.name}`)
    },
    })

    return (
    <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
    >
        <div>
        <label
            htmlFor="name"
            className="block mb-1 font-medium text-gray-700"
        >
            Name
        </label>

        <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />

        {formik.touched.name && formik.errors.name && (
            <p className="mt-1 text-sm text-red-600">
            {formik.errors.name}
            </p>
        )}
        </div>

        <div>
        <label
            htmlFor="email"
            className="block mb-1 font-medium text-gray-700"
        >
            Email
        </label>

        <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />

        {formik.touched.email && formik.errors.email && (
            <p className="mt-1 text-sm text-red-600">
            {formik.errors.email}
            </p>
        )}
        </div>

        <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800"
        >
        Submit
        </button>
    </form>
    )
}

export default ContactForm