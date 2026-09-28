const WhatsAppButton = () => {
  const phoneNumber = "9860344023"; // Replace with your WhatsApp number
  const message = "Hello, I would like to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        bottom-[20px]
        right-[20px]
        z-[9999]

        flex
        h-[56px]
        w-[56px]
        items-center
        justify-center

        rounded-full

        bg-[#25D366]

        shadow-[0_4px_15px_rgba(0,0,0,0.25)]

        transition-all
        duration-300
        ease-out

        hover:scale-110
        hover:bg-[#20bd5a]

        active:scale-95

        sm:bottom-[24px]
        sm:right-[24px]

        md:h-[60px]
        md:w-[60px]
        md:bottom-[28px]
        md:right-[28px]
      "
    >
      <svg
        viewBox="0 0 32 32"
        className="
          h-[30px]
          w-[30px]

          fill-white

          sm:h-[32px]
          sm:w-[32px]
        "
      >
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.44 1.74 6.32L3 29l6.86-1.7A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.6c-2.05 0-4.05-.55-5.8-1.6l-.42-.25-4.07 1.01 1.03-3.97-.27-.43A10.57 10.57 0 1 1 16 26.6Zm5.8-7.92c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.59-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.7s1.17 3.13 1.33 3.35c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.55 1.87.7.79.25 1.5.21 2.06.13.63-.09 1.9-.78 2.17-1.54.27-.76.27-1.41.19-1.54-.08-.13-.3-.21-.62-.37Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
