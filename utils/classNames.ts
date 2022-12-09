const classNames = (
  ...classes: Array<string | boolean | undefined>
): string => {
  const arrayClasses: string[] = [];

  classes.forEach((element) => {
    if (typeof element === 'string') {
      arrayClasses.push(element);
    }
  });

  const className = arrayClasses.join(' ');
  return className;
};

export { classNames };
export default classNames;
