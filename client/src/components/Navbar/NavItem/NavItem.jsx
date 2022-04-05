import React, { useState } from 'react';

import * as S from './NavItemStyles';

function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false);

  return (
    <S.Items>
      <S.IconButtonLink to='' onClick={() => setOpen((prevState) => !prevState)}>
        {icon}
      </S.IconButtonLink>

      {open && children}
    </S.Items>
  );
}

export default NavItem;
