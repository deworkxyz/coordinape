import { useEffect } from 'react';

import HCaptcha from '@hcaptcha/react-hcaptcha';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

import { CAPTCHA_SITE_KEY } from 'config/env';
import { DOMAIN_IS_LOCALHOST } from 'utils/domain';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(4, 2),
  },
  error: {
    fontSize: 13,
    lineHeight: 1.2,
    fontWeight: 600,
    marginTop: theme.spacing(1.5),
    color: theme.colors.red,
  },
}));

export const FormCaptcha = ({
  onChange,
  className,
  error,
  errorText,
}: {
  value?: string;
  onChange: (newValue: string) => void;
  className?: string;
  error?: boolean;
  errorText?: string;
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (DOMAIN_IS_LOCALHOST) {
      console.error(
        'hCaptcha prohibits localhost and 127.0.0.1 as supplied hostnames. See FormCaptcha.'
      );
      // See: https://docs.hcaptcha.com/#localdev
      // Put `127.0.0.1 local-ape.host` in hosts
      // Linux: /etc/hosts
      // Mac: /private/etc/hosts
      // Windows: C:\Windows\System32\Drivers\etc\hosts
      // Then goto: http://local-ape.host:3000/
    }
  }, []);

  return (
    <div className={clsx(className, classes.root)}>
      <HCaptcha
        sitekey={CAPTCHA_SITE_KEY}
        onVerify={t => onChange(t)}
        onExpire={() => onChange('')}
      />
      {!!error && <div className={classes.error}>{errorText}</div>}
    </div>
  );
};
