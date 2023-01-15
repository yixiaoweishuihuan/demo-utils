import Input from '@/tags/Input'
import Radio from '@/tags/Radio'
import Number from '@/tags/Number'
import Checkbox from '@/tags/Checkbox'
import Select from '@/tags/Select'

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
