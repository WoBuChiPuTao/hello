import { useCallback } from 'react';
import { View, Text, Button, Image } from '@tarojs/components';
import { useEnv, useNavigationBar, useModal, useToast, useUserInfo } from 'taro-hooks';
import { navigateTo } from '@tarojs/taro';
import logo from './hook.png';

import './index.less';

const Index = () => {
  const env = useEnv();
  const { setTitle } = useNavigationBar({ title: 'Taro Hooks' });
  const showModal = useModal({
    title: 'Taro Hooks Canary!',
    showCancel: true,
    confirmColor: '#8c2de9',
    confirmText: '支持一下',
  });
  const { show } = useToast({ mask: true });

  const handleModal = useCallback(() => {
    showModal({ content: '不如给一个star⭐️!' }).then(() => {
      show({ icon: 'loading', duration: 3000 });
    });
  }, [show, showModal]);

  const goPage = (path: string) => {
    navigateTo({ url: `/pages/${path}/index` });
  };

  const [userInfo] = useUserInfo();

  const toUserInfo = () => {
    console.log('userInfo', userInfo);
  };

  return (
    <View className='wrapper'>
      <Text className='title'>为Taro而设计的Hooks Library</Text>
      <Text className='desc'>
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks! 并结合ahook适配Taro!
        更多信息可以查看新版文档: https://next-version-taro-hooks.vercel.app/
      </Text>
      <View className='list'>
        <Text className='label'>运行环境</Text>
        <Text className='note'>{env}</Text>
      </View>
      <Button className='button' onClick={() => setTitle('Taro Hooks Nice!')}>
        设置标题
      </Button>
      <Button className='button' onClick={handleModal}>
        使用Modal
      </Button>
      <Button className='button' onClick={() => goPage('calculator')}>
        跳转计算页
      </Button>
      <Button className='button' onClick={toUserInfo}>
        用户信息
      </Button>
    </View>
  );
};

export default Index;
