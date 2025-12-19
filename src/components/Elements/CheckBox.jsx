import React from 'react'

function CheckBox(props) {
    const {
        label,
        id,
        linkText = 'terms of service.',
        linkHref = '#',
        type = 'checkbox',
        ...rest
    } = props;

    return (
        <div className="flex items-start">
            <input
                className="mt-1 mr-3 accent-primary"
                id={id}
                type={type}
                {...rest}
            />
            <label htmlFor={id} className="text-sm text-gray-03">
                {label} <a href={linkHref} className="text-primary font-semibold">{linkText}</a>
            </label>
        </div>
    );
}

export default CheckBox;