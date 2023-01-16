import Input from '@/tags/BaseCompo/Input'
import Radio from '@/tags/BaseCompo/Radio'
import Number from '@/tags/BaseCompo/Number'
import Checkbox from '@/tags/BaseCompo/Checkbox'
import Select from '@/tags/BaseCompo/Select'

export default {
  data () {
    return {
      comMap: {
        input: Input,
        radio: Radio,
        number: Number,
        checkbox: Checkbox,
        select: Select
      }
    }
  }
}
