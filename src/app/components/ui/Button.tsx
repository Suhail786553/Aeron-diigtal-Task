import clsx from 'clsx';

export default function Button({
  children,
  className = '',
  type = 'button',
  variant = 'primary',
}) {
  const baseClasses = 'px-6 py-2 rounded-full font-medium transition duration-300';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300',
  };

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], className)}
    >
      {children}
    </button>
  );
}
