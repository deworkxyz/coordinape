import { FC, useCallback, useEffect, useMemo } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import { useApiAdminCircle } from 'hooks';
import { useCircle, useSelectedCircle } from 'recoilState';
import { getCirclesPath } from 'routes/paths';

export const DeworkCallbackPage: FC = () => {
  const history = useHistory();
  const { search } = useLocation();
  const deworkOrganizationId = useMemo(
    () => new URLSearchParams(search).get('dework_organization_id'),
    [search]
  );

  const { circleId } = useSelectedCircle();
  const { circle } = useCircle(circleId);
  const { updateCircle } = useApiAdminCircle(circleId);

  const updateDeworkOrganizationId = useCallback(async () => {
    if (deworkOrganizationId) {
      await updateCircle({
        ...circle,
        token_name: circle.tokenName,
        update_webhook: 0,
        dework_organization_id: deworkOrganizationId,
      });
    }

    history.replace(getCirclesPath());
  }, []);
  useEffect(() => {
    updateDeworkOrganizationId();
  }, []);
  return null;
};
