import Input from '@/components/Input'
import Radio from '@/components/Radio'
import Number from '@/components/Number'
import Checkbox from '@/components/Checkbox'
import Select from '@/components/Select'

export default {
  data() {
    return {
      comMap: {
        input: Input,
        radio: Radio,
        number: Number,
        checkbox: Checkbox,
        select: Select
      }
    };
  },
}