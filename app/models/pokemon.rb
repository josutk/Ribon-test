class Pokemon < ApplicationRecord
    def to_param
        name
    end
end
