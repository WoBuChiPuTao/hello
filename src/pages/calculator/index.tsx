import { View, Text, Button } from '@tarojs/components';
import { useLoading, useRouter } from 'taro-hooks';

import './index.less';

const Index = () => {
  console.log('router', useRouter());

  const { show, hide } = useLoading({ mask: true });

  const showLoading = () => {
    show();
    setTimeout(() => {
      hide();
      console.log('dasfasf')
    }, 5000);
  };

  return (
    <View className='wrapper'>
      <Text>这是计算页</Text>
      <View>
        <Button className='button' onClick={showLoading}>
          loading
        </Button>
      </View>
    </View>
  );
};

export default Index;
