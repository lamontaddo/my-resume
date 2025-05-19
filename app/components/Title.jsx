import { motion } from 'framer-motion';

export default function Title({
  id,
  title,
  children,
  className,
  handleActive,
  isActiveId,
}) {
  const isOpen = id === isActiveId;

  return (
    <>
      <h3
        className={className}
        onClick={() => {
          handleActive(isOpen ? null : id);
        }}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'inline-block' }}
        >
          ▲
        </motion.span>
      </h3>
      {isOpen && children}
    </>
  );
}
