import { useState } from 'react';

// components
import { useTranslation } from 'react-i18next';

import { Form, Input } from '@arco-design/web-react';
import { FormHeader } from '@refly-packages/ai-workspace-common/components/skill/form-header';

const FormItem = Form.Item;
const TextArea = Input.TextArea;

export const BasicInfoFormItems = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <FormHeader
        title={t('skill.newSkillModal.basicInfo')}
        enableCollapse
        collapsed={collapsed}
        onCollapseChange={setCollapsed}
      />
      {!collapsed ? (
        <>
          <FormItem
            label={t('skill.newSkillModal.name')}
            required
            layout="vertical"
            field="displayName"
            rules={[{ required: true, message: t('skill.newSkillModal.namePlaceholder') }]}
          >
            <Input
              placeholder={t('skill.newSkillModal.namePlaceholder')}
              maxLength={50}
              showWordLimit
            />
          </FormItem>
          <FormItem
            label={t('skill.newSkillModal.description')}
            required
            layout="vertical"
            field="description"
            rules={[{ required: true, message: t('skill.newSkillModal.descriptionPlaceholder') }]}
          >
            <TextArea
              placeholder={t('skill.newSkillModal.descriptionPlaceholder')}
              autoSize
              maxLength={500}
              showWordLimit
              style={{ minHeight: 84 }}
            />
          </FormItem>
        </>
      ) : null}
    </>
  );
};
